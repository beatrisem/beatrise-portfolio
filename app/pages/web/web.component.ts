import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import {SectionTitleComponent} from "../../reusable/section-title/section-title.component";
import {ButtonComponent} from "../../reusable/buttons/button.component";

@Component({
  selector: 'web-works',
  standalone: true,
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
  imports: [
    SectionTitleComponent,
    ButtonComponent
  ]
})
export class WebComponent implements AfterViewInit {
  @ViewChild('gameCanvas', { static: true }) gameCanvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  private dog: any;
  private obstacles: any[] = [];
  private gameSpeed: number = 300;
  private gravity: number = 1200;
  private score: number = 0;
  private isGameOver: boolean = false;

  // Delta time
  private previousTime = 0;

  // Images
  private dogRunImage = new Image();
  private dogJumpImage = new Image();
  private cloudImage1 = new Image();
  private cloudImage2 = new Image();
  private obstacleImages: HTMLImageElement[] = [];

  // Cloud positions and loading
  private cloud1X = -959;
  private cloud2X = -576;
  private cloudImageWidth = 959;
  private cloudImageHeight = 300;

  // Dog animation
  private frameIndex = 0;
  private runFrameWidth = 512 / 8;
  private runFrameHeight = 43;
  private totalRunFrames = 8;
  private animationSpeed = 5;
  private animationCounter = 0;

  // Obstacle distance
  private minObstacleDistance = 300;
  private maxObstacleDistance = 557;

  //Canvas initial width
  private initialCanvasWidth: number = Math.min(window.innerWidth * 0.8, 800);

  ngAfterViewInit() {
    this.ctx = this.gameCanvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;

    const loadImagesPromises: Promise<void>[] = [];
    const loadImage = (img: HTMLImageElement, src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject(`Failed to load image: ${src}`);
      });
    };

    loadImagesPromises.push(loadImage(this.dogRunImage, 'assets/game/dog/dog_run.png'));
    loadImagesPromises.push(loadImage(this.dogJumpImage, 'assets/game/dog/dog_jump_sprite.png'));
    loadImagesPromises.push(loadImage(this.cloudImage1, 'assets/game/clouds/clouds1.png'));
    loadImagesPromises.push(loadImage(this.cloudImage2, 'assets/game/clouds/clouds2.png'));

    for (let i = 1; i <= 10; i++) {
      const obstacleImage = new Image();
      loadImagesPromises.push(loadImage(obstacleImage, `assets/game/obstacles/${i}.png`));
      this.obstacleImages.push(obstacleImage);
    }

    Promise.all(loadImagesPromises)
      .then(() => this.startGame())
      .catch(error => console.error('Error loading images: ', error));

    this.adjustCanvasSize();
    window.addEventListener('resize', this.adjustCanvasSize.bind(this));
  }

  // Responsive canvas size
  adjustCanvasSize() {
    const minWidth = 300;
    const canvasWidth = Math.min(this.initialCanvasWidth, window.innerWidth * 0.8);
    this.gameCanvas.nativeElement.width = Math.max(minWidth, canvasWidth);
    this.gameCanvas.nativeElement.height = window.innerHeight * 0.6;
  }

  // Game setup
  startGame() {
    this.isGameOver = false;
    this.score = 0;

    this.dog = {
      x: 95,
      y: this.gameCanvas.nativeElement.height - 106,
      width: (512 / 8) * 2,
      height: 43 * 2,
      speedY: 5,
      isJumping: false,
    };
    this.obstacles = [];

    this.previousTime = performance.now();
    requestAnimationFrame(this.gameLoop.bind(this));
  }

  //Space bar for jump
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.code === 'Space') {
      event.preventDefault();
      if (this.isGameOver) {
        this.startGame();
      } else {
        this.jump();
      }
    }
  }

  //Touch screen for jump
  @HostListener('window:touchstart', ['$event'])
  handleTouchStart(event: TouchEvent) {
    event.preventDefault();
    this.jump();
  }

  jump() {
    if (!this.dog.isJumping) {
      this.dog.speedY = -650;
      this.dog.isJumping = true;
    }
  }

  // Delta time (same speed for all screens)
  updateDog(deltaTime: number) {
    this.dog.y += this.dog.speedY * deltaTime;
    this.dog.speedY += this.gravity * deltaTime;

    if (this.dog.y >= this.gameCanvas.nativeElement.height - this.dog.height - 40) {
      this.dog.y = this.gameCanvas.nativeElement.height - this.dog.height - 40;
      this.dog.isJumping = false;
    }

    // Dog animation
    this.animationCounter += deltaTime * this.animationSpeed;
    if (this.animationCounter >= 1) {
      this.frameIndex = (this.frameIndex + 1) % this.totalRunFrames;
      this.animationCounter = 0;
    }

    const spriteX = (this.totalRunFrames - 1 - this.frameIndex) * this.runFrameWidth;
    const image = this.dog.isJumping ? this.dogJumpImage : this.dogRunImage;
    this.ctx.drawImage(image, spriteX, 0, this.runFrameWidth, this.runFrameHeight, this.dog.x, this.dog.y, this.dog.width, this.dog.height);
  }

  // Create obstacles
  createObstacle() {
    const randomSize = Math.random() * (54 - 20) + 20;
    const obstacleImage = this.obstacleImages[Math.floor(Math.random() * this.obstacleImages.length)];
    const randomDistance = Math.random() * (this.maxObstacleDistance - this.minObstacleDistance) + this.minObstacleDistance;

    if (
      this.obstacles.length === 0 ||
      this.obstacles[this.obstacles.length - 1].x < this.gameCanvas.nativeElement.width - randomDistance
    ) {
      this.obstacles.push({
        x: this.gameCanvas.nativeElement.width + randomSize,
        y: this.gameCanvas.nativeElement.height - randomSize - 40,
        width: randomSize,
        height: randomSize,
        image: obstacleImage,
      });
    }
  }

  updateObstacles(deltaTime: number) {
    if (Math.random() < 0.04) this.createObstacle();

    this.obstacles.forEach((obstacle, index) => {
      obstacle.x -= this.gameSpeed * deltaTime;
      this.ctx.drawImage(obstacle.image, obstacle.x, obstacle.y, obstacle.width, obstacle.height);

      // Collision buffer
      const buffer = 10;
      if (
        this.dog.x + buffer < obstacle.x + obstacle.width - buffer &&
        this.dog.x + this.dog.width - buffer > obstacle.x + buffer &&
        this.dog.y + buffer < obstacle.y + obstacle.height - buffer &&
        this.dog.y + this.dog.height - buffer > obstacle.y + buffer
      ) {
        this.isGameOver = true;
      }

      if (obstacle.x + obstacle.width < 0) {
        this.obstacles.splice(index, 1);
        this.score++;
      }
    });
  }

  // Game loop
  gameLoop(currentTime: number) {
    if (this.isGameOver) {
      this.ctx.fillStyle = '#000';
      this.ctx.font = '50px Inter';
      this.ctx.fillText('Game Over', this.gameCanvas.nativeElement.width / 2 - 100, this.gameCanvas.nativeElement.height / 2);
      return;
    }

    const deltaTime = (currentTime - this.previousTime) / 1000;
    this.previousTime = currentTime;

    // Draw background first, clouds will be behind the ground
    this.drawBackground(deltaTime);

    // Update game objects
    this.updateDog(deltaTime);
    this.updateObstacles(deltaTime);

    // Display score
    this.ctx.fillStyle = '#000';
    this.ctx.font = '20px Inter';
    this.ctx.fillText(`Score: ${this.score}`, 10, 20);

    requestAnimationFrame(this.gameLoop.bind(this));
  }

// Sky and ground
  drawBackground(deltaTime: number) {
    // Draw the sky first
    this.ctx.fillStyle = '#F7E6E7FF';
    this.ctx.fillRect(0, 0, this.gameCanvas.nativeElement.width, this.gameCanvas.nativeElement.height);

    // Draw the clouds (pass deltaTime for animation)
    this.drawClouds(deltaTime);

    // Now draw the ground on top of everything else
    this.ctx.fillStyle = '#D28C8CFF';
    this.ctx.fillRect(0, this.gameCanvas.nativeElement.height - 80, this.gameCanvas.nativeElement.width, 80);
  }

// Clouds
  drawClouds(deltaTime: number) {
    const cloudSpeed1 = 40;
    const cloudSpeed2 = 20;

    this.cloud1X -= cloudSpeed1 * deltaTime;
    this.cloud2X -= cloudSpeed2 * deltaTime;

    if (this.cloud1X <= -this.cloudImageWidth) {
      this.cloud1X = 0;
    }

    if (this.cloud2X <= -this.cloudImageWidth) {
      this.cloud2X = 0;
    }

    // Draw the clouds at their new positions
    this.ctx.drawImage(this.cloudImage1, this.cloud1X, 60, this.cloudImageWidth, this.cloudImageHeight);
    this.ctx.drawImage(this.cloudImage1, this.cloud1X + this.cloudImageWidth, 60, this.cloudImageWidth, this.cloudImageHeight);

    this.ctx.drawImage(this.cloudImage2, this.cloud2X, 130, this.cloudImageWidth, this.cloudImageHeight);
    this.ctx.drawImage(this.cloudImage2, this.cloud2X + this.cloudImageWidth, 130, this.cloudImageWidth, this.cloudImageHeight);
  }
}
