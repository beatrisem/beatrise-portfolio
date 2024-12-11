import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class AssetsService {
  public readonly websiteLogo: string = 'M14.8489,24H0l.0683-.2727c1.1606.0683,2.6284-.7841,3.4135-1.5001L8.7386,2.6592l-2.5602-.8181.0684-.2047c1.9457-.2387,3.8913-.8181,5.7345-1.6024l6.827-.034c4.5402,0,11.9816.375,10.8551,4.6023-.8194,2.9659-5.4958,4.5-7.578,5.4887,6.6564.2727,9.6602,2.6932,8.8067,5.8977-1.2627,4.7043-6.349,8.0112-16.0432,8.0112ZM14.951,23.6593c4.8813,0,8.3974-4.1593,9.319-7.5342.6145-2.3182.1706-4.466-2.9016-5.7274-4.3693,1.9431-8.2947,2.1818-9.8992,6.8525l-1.7067,6.4091h5.1884ZM17.8867.375h-1.9116l-4.0619,15.034c3.6523-5.3181,8.8751-2.6589,10.8207-9.9204.8191-2.9999-1.263-5.1137-4.8473-5.1137Z M50.2796,13.2956c3.0038,0,4.5399,2.0795,3.8232,4.7387-1.0241,3.6136-5.2909,5.9658-10.2747,5.9658-7.817,0-11.8792-3.2046-10.5136-8.3522,1.3996-5.216,6.8954-8.3522,14.5415-8.3522,2.1165,0,7.5439,1.5681,6.3493,3.1705-.4439.75-1.3996,1.8748-2.3555,1.8748-.1706,0-.3755-.034-.5461-.102l-3.9597,1.6021c1.0925-.375,2.0822-.5454,2.9357-.5454ZM44.3062,23.6593c4.3693,0,8.5336-2.3865,9.4212-5.6251.6486-2.4545-1.0925-4.2613-4.1987-4.2613-1.2971,0-2.7991.3067-4.5058.9884l-5.4958,2.2501c-.6826,3.6136.8875,6.6478,4.7791,6.6478ZM39.6979,16.3295c-.0344.1023-.0684.1707-.1025.273l11.2987-4.5683c.0341-2.1818.239-4.466-3.0381-4.466-4.7107,0-7.4074,5.9661-8.1581,8.7613Z M70.6231,18.9887c-1.229,2.4545-3.4817,4.875-7.2368,4.875-4.7788,0-8.602-3.3409-7.1341-8.6249,1.1946-4.2956,5.3593-8.0796,11.6399-8.0796,3.0041,0,4.4718,1.5001,4.9838,3.3069l.751-2.8295s.273-.4093.512-.2047c.3415.2727,4.5742,1.7045,5.7348,1.7045l-3.2087,11.9318c-.2049.7841-.5464,1.9774-.1709,1.9774.1025,0,.7851-.375,1.502-.8184.8191-.5114,1.6386-1.1931,1.6386-1.1931l.239.2727c-2.492,1.3978-3.8232,2.6252-3.8232,2.6252l-.4096.068-6.0419-1.2614,1.0241-3.7499ZM72.1592,13.1249c-.0344-.068-.0684-.1704-.1025-.3067,0-1.9431-.512-5.216-3.2087-5.216-3.5842,0-5.2568,5.3524-5.3933,5.7614-1.8091,5.7614-2.6286,10.057.6826,10.091,2.5261.068,5.2909-2.2158,6.7929-5.7274l1.229-4.6023Z M96.4621,18.2729c.4439,2.6932-1.8432,5.7271-6.11,5.7271-3.5842,0-7.817-1.8748-6.7929-5.6931l2.8672-10.6704h-3.6523l.1022-.341h.1709c6.9975-.2047,7.2706-5.4887,7.2706-5.4887,1.4336-1.1931,4.6083-1.2271,4.6083-1.2271l.3755.1363c.239.5114-1.502,5.6251-9.6261,6.5795h12.3228l-.1025.341h-4.9154l-2.9697,11.2158c-.751,2.8295-1.3996,4.909,1.6042,4.6363,3.0722-.3067,4.8473-2.5568,4.5058-5.2157h.3415Z M119.8783,10.6704c.2049,0,.4099-.034.6489-.102l.1706.2044c-.9216.9547-3.0722,3.0342-4.8473,3.0002-2.7991-.0343-1.7407-3.4775-4.1987-3.4775-.7851,0-2.1503,1.0227-3.5839,3.7842l-1.98,7.3978.0341,2.3862-.4096.1363s-3.6864-.375-8.8412-.375l.0684-.3067s1.7752.2387,2.4578-1.6024l3.1406-11.7272-2.5945-.8524.0684-.2044c2.7991-.341,8.568-1.2954,9.0457-1.5681.3415-.2047.751.2384.751.2384l-1.3655,5.0797c1.3655-2.1135,3.2771-5.4547,7.0319-5.4547,2.9016,0,2.5602,3.4432,4.4033,3.4432Z M124.1785,9.9204l-2.6286-.8181c-.8532,0-1.6386-.1363-2.3212-.375l.1025-.1704c.6826.2387,1.4677.341,2.2871.3067,2.7991-.3407,5.0859-1.2614,5.5639-1.5681.3415-.1704,4.2328.2387,4.2328.2387l-3.6523,13.6023c-.2049.75-.5464,1.9091-.1709,1.9091.1365,0,.8194-.375,1.502-.8184.8535-.5114,1.6726-1.1931,1.6726-1.1931l.2049.2727c-2.492,1.3978-3.7891,2.6252-3.7891,2.6252l-.4436.068-6.0078-1.2614,3.4477-12.8182ZM126.0558,3.0682c.3755-1.4318,2.1506-2.5909,3.9597-2.5909s2.9357,1.1591,2.5602,2.5909c-.3755,1.4661-2.1506,2.6252-3.9597,2.6252s-2.9697-1.1591-2.5602-2.6252Z M147.97,19.5c-.9557,3.0342-5.7686,4.3976-8.7726,4.3976-3.7548,0-7.578-1.6021-8.3971-3.2726l.1365-.2727s2.7991-1.6704,4.1303-1.6024c0,0,1.9116,4.3979,2.1506,4.466,1.4336.2727,2.7307.409,3.8232.2387,2.4233-.375,3.0038-1.1591,3.3793-2.0115,1.6386-3.5796-12.7664-2.8635-10.9916-9.4773.6829-2.6249,4.3693-4.7727,9.558-4.7727,3.5499,0,5.9735,1.3978,6.3831,1.7728l-.0681.2727s-2.8672,2.1138-4.2668,2.3182c0,0-2.2531-4.0226-2.492-4.0226-2.5258.068-4.9838.5114-5.4958,2.4885-.8872,3.2389,13.1079,2.5909,10.9232,9.4773Z M167.9045,13.2956c3.0038,0,4.5399,2.0795,3.8232,4.7387-1.0241,3.6136-5.2909,5.9658-10.2747,5.9658-7.817,0-11.8792-3.2046-10.5136-8.3522,1.3996-5.216,6.8954-8.3522,14.5415-8.3522,2.1165,0,7.5439,1.5681,6.3493,3.1705-.4439.75-1.3996,1.8748-2.3555,1.8748-.1706,0-.3755-.034-.5461-.102l-3.9597,1.6021c1.0925-.375,2.0822-.5454,2.9357-.5454ZM161.9311,23.6593c4.3693,0,8.5336-2.3865,9.4212-5.6251.6486-2.4545-1.0925-4.2613-4.1987-4.2613-1.2971,0-2.7991.3067-4.5058.9884l-5.4958,2.2501c-.6826,3.6136.8875,6.6478,4.7791,6.6478ZM157.3228,16.3295c-.0344.1023-.0684.1707-.1025.273l11.2987-4.5683c.0341-2.1818.239-4.466-3.0381-4.466-4.7107,0-7.4074,5.9661-8.1581,8.7613Z';

  public readonly closeIcon: string = 'M92.5,14.2l-37.5,37.5L17.5,14.2l-8.3,8.3,37.5,37.5L9.2,97.5l8.3,8.3,37.5-37.5,37.5,37.5,8.3-8.3-37.5-37.5,37.5-37.5-8.3-8.3Z';
  public readonly rightArrowIcon: string = 'M32.1,59.7l29-29L32.1,1.7l-4.2,4.2,21.8,21.7H1.2v6h48.4l-21.8,21.8,4.2,4.2Z';
  public readonly leftArrowIcon: string = 'M30.2,1.7L1.2,30.7l29,29,4.2-4.2-21.8-21.7h48.5s0-6,0-6H12.7S34.5,6,34.5,6l-4.2-4.2h0Z';
  public readonly topRightArrowIcon: string = 'M52.3,50.6V9.6c.1,0-40.9-.1-40.9-.1v5.9s30.7,0,30.7,0L7.7,49.6l4.2,4.3L46.3,19.8v30.8c-.1,0,5.8,0,5.8,0h.1Z';
  public readonly instagramIcon: string = 'M18.4,3h57.4c9,0,16.3,7.3,16.3,16.3v57.4c0,9-7.3,16.3-16.3,16.3H18.4c-9,0-16.3-7.3-16.3-16.3V19.3c0-9,7.3-16.3,16.3-16.3ZM76.4,15c-3.4,0-6.1,2.8-6.1,6.1s2.8,6.1,6.1,6.1c3.4,0,6.1-2.8,6.1-6.1h0c0-3.4-2.8-6.1-6.1-6.1h0ZM79.2,18.4c-1.5-1.5-4-1.5-5.5,0-1.5,1.5-1.5,4,0,5.5,1.5,1.5,4,1.5,5.5,0,1.5-1.5,1.5-4,0-5.5ZM47.9,22.6c-14.5,0-26.2,11.7-26.2,26.2s11.7,26.2,26.2,26.2,26.2-11.7,26.2-26.2h0c0-14.5-11.7-26.2-26.2-26.2h0ZM64.8,31.8c-9.4-9.4-24.6-9.4-33.9,0s-9.4,24.6,0,33.9c9.4,9.4,24.6,9.4,33.9,0h0c9.4-9.4,9.4-24.6,0-33.9ZM75.8,5.2H18.4c-7.8,0-14,6.3-14.1,14.1v57.4c0,7.8,6.3,14,14.1,14.1h57.4c7.8,0,14-6.3,14.1-14.1V19.3c0-7.8-6.3-14-14.1-14.1Z';
  public readonly darkModeIcon: string = 'M42,1.8C19.7,3.3,2,22,2,44.7c0,23.8,19.3,43.1,43,43.1s41.4-17.7,43-40c0-.6-.4-1-.9-1-.4,0-.7.2-.9.5-5.5,9.9-16,16.6-28.1,16.6-17.7,0-32.1-14.3-32.1-32,0-12.1,6.7-22.6,16.6-28.1.5-.3.7-.9.4-1.4-.2-.3-.6-.6-1-.5ZM37.6,4.5c-8.2,6.2-13.6,16.1-13.6,27.2,0,18.8,15.3,34,34.1,34s21-5.3,27.2-13.6c-3.5,19.1-20.1,33.6-40.2,33.6S4,67.4,4,44.7c0-20.1,14.5-36.6,33.5-40.2Z';
  public readonly lightModeIcon: string = 'M65.2,32.3l-8.9-8.9v-12.7c0-.5-.4-1-1-1h-12.7L33.7.8h0c-.4-.4-1-.4-1.4,0l-9,8.9h-12.7c-.5,0-1,.4-1,1v12.7L.8,32.3h0c-.4.4-.4,1,0,1.4l8.9,8.9v12.7c0,.5.4,1,1,1h12.7l9,9c.2.2.4.3.7.3s.5-.1.7-.3l8.9-8.9h12.7c.5,0,1-.4,1-1v-12.7l8.9-8.9h0c.4-.4.4-1,0-1.4ZM54.6,41.5c-.2.2-.3.4-.3.7v12.1h-12.1c-.3,0-.5.1-.7.3l-8.6,8.6-8.5-8.6c-.2-.2-.4-.3-.7-.3h-12.1v-12.1c0-.3-.1-.5-.3-.7l-8.5-8.6,8.5-8.5c.2-.2.3-.4.3-.7v-12.1h12.1c.3,0,.5-.1.7-.3l8.6-8.5,8.5,8.5c.2.2.4.3.7.3h12.1v12.1c0,.3.1.5.3.7l8.6,8.5-8.6,8.6Z';
}
