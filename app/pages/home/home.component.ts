import { Component, AfterViewInit, ElementRef, ViewChild, HostListener, EventEmitter, Output } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader, RGBELoader } from 'three-stdlib';
import { RouterLink } from '@angular/router';
import { AssetsService } from '../../services/assets.service';

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [RouterLink],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @Output() modelLoaded: EventEmitter<void> = new EventEmitter<void>(); // Event to notify when model is loaded
  @ViewChild('canvasElement', { static: false }) private canvasElement!: ElementRef<HTMLElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private loader = new GLTFLoader();
  private animationFrameId: number = 0;
  private sizes = { width: 0, height: 0 };
  private previousTime = 0;
  private ringMeshes: THREE.Mesh[] = [];

  ngAfterViewInit(): void {
    this.initThreeJs();
    this.onWindowResize();
    this.startAnimationLoop();
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
    this.renderer.dispose();
  }

  constructor(public assetsService: AssetsService) {}

  private initThreeJs(): void {
    const canvas = this.canvasElement.nativeElement;
    const container = canvas.parentElement as HTMLElement;

    // Set canvas size based on its container
    this.sizes.width = container.clientWidth;
    this.sizes.height = container.clientHeight;

    // Initialize the scene, camera, and renderer
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(8.2, this.sizes.width / this.sizes.height, 1, 75);
    this.camera.position.set(0, 5, 5);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Load HDR texture for environment map
    const hdrLoader = new RGBELoader();
    hdrLoader.load('/assets/textures/belfast_16compressed.hdr', (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      this.scene.environment = texture;

      // Load 3D model
      this.loader.load(
        '/assets/models/concentric_rings.glb',
        (glb) => {
          const rings = glb.scene;

          // Process each mesh in the model
          rings.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.material = new THREE.MeshBasicMaterial({
                envMap: texture,
                transparent: true,
                depthTest: true,
                depthWrite: false,
                reflectivity: 0.9,
                opacity: 0.5,
                color: '#F7E6E7',
              });
              this.ringMeshes.push(mesh);
            }
          });

          this.scene.add(rings); // Add the model to the scene
        },
        undefined,
        (error) => {
          console.error('Error loading 3D model:', error);
        }
      );
    }, undefined, (error) => {
      console.error('Error loading HDR texture:', error);
    });

    // Add lights
    const directionalLight = new THREE.DirectionalLight('#fdf3b3', 10);
    directionalLight.position.set(2, 1, 5);
    this.scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight('#f8d37e', 50);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight('#ffeac6', 3, 100);
    pointLight.position.set(0, 5, 9);
    this.scene.add(pointLight);
  }

  private startAnimationLoop(): void {
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  private animate(time: number): void {
    // Delta time
    const deltaTime = (time - this.previousTime) / 1000;
    this.previousTime = time;

    // Animate each ring with delta time
    this.ringMeshes.forEach((ring, index) => {
      const speed = 0.10 * (index + 1);
      ring.rotation.x += speed * deltaTime;
      ring.rotation.y += (speed * 0.5) * deltaTime;
    });

    this.renderer.render(this.scene, this.camera);
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    if (!this.canvasElement || !this.canvasElement.nativeElement) {
      return;
    }

    const canvas = this.canvasElement.nativeElement;
    const container = canvas.parentElement as HTMLElement;
    this.sizes.width = container.clientWidth;
    this.sizes.height = container.clientHeight;

    this.camera.aspect = this.sizes.width / this.sizes.height;

    // Adjust zoom level based on container width
    const minWidth = 650;
    const minZoom = 0.9;
    const maxZoom = 1;

    this.camera.zoom = Math.max(Math.min(this.sizes.width / minWidth, maxZoom), minZoom);
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}
