// use samples data to test
// import { Reports } from '../src/report';
import browserDetails from '../src/utils/browser';
import {
  AudioInputReports,
  AudioOutputReports,
  VideoInputReports,
  VideoOutputReports,
} from '../src/simple-reports';

import {
  chromeInOriginalReports,
  chromeOutOriginalReports,
  // chromeInLegacyOriginalReports,
  // chromeOutLegacyOriginalReports,
  firefoxInOriginalReports,
  firefoxOutOriginalReports,
  safariInOriginalReports,
  safariOutOriginalReports
} from './utils/load-samples';

describe('Audio Input Reports - ', function (): void {
  let reports: AudioInputReports;
  switch (browserDetails.browser) {
    case 'chrome':
      reports = new AudioInputReports(chromeInOriginalReports);
      break;
    case 'firefox':
      reports = new AudioInputReports(firefoxInOriginalReports);
      break;
    case 'safari':
      reports = new AudioInputReports(safariInOriginalReports);
      break;
  }

  it(browserDetails.browser, function (): void {
    expect(reports.bytesReceived).toBeGreaterThanOrEqual(0);
    expect(reports.jitter).toBeGreaterThanOrEqual(0);
    expect(reports.packetsLost).toBeGreaterThanOrEqual(0);
    expect(reports.packetsReceived).toBeGreaterThanOrEqual(0);

    switch (browserDetails.browser) {
      case 'chrome':
        expect(reports.audioLevel).toBeGreaterThanOrEqual(0);
        expect(reports.totalAudioEnergy).toBeGreaterThanOrEqual(0);
        break;
      case 'safari':
        expect(reports.audioLevel).toBeGreaterThanOrEqual(0);
        expect(reports.totalAudioEnergy).toEqual(-1);
        break;
      default:
        expect(reports.audioLevel).toEqual(-1);
        expect(reports.totalAudioEnergy).toEqual(-1);
    }
    // todo - edge & others
  });
});

describe('Audio Output Reports - ', function (): void {
  let reports: AudioOutputReports;
  switch (browserDetails.browser) {
    case 'chrome':
      reports = new AudioOutputReports(chromeOutOriginalReports);
      break;
    case 'firefox':
      reports = new AudioOutputReports(firefoxOutOriginalReports);
      break;
    case 'safari':
      reports = new AudioOutputReports(safariOutOriginalReports);
      break;
  }
  it(browserDetails.browser, function (): void {
    expect(reports.bytesSent).toBeGreaterThanOrEqual(0);
    expect(reports.packetsSent).toBeGreaterThanOrEqual(0);

    switch (browserDetails.browser) {
      case 'chrome':
        expect(reports.jitter).toBeGreaterThanOrEqual(0);
        expect(reports.packetsLost).toBeGreaterThanOrEqual(0);
        expect(reports.roundTripTime).toBeGreaterThanOrEqual(0);
        expect(reports.audioLevel).toBeGreaterThanOrEqual(0);
        expect(reports.totalAudioEnergy).toBeGreaterThanOrEqual(0);
        break;
      case 'firefox':
        expect(reports.jitter).toBeGreaterThanOrEqual(0);
        expect(reports.packetsLost).toBeGreaterThanOrEqual(0);
        expect(reports.roundTripTime).toBeGreaterThanOrEqual(0);
        expect(reports.audioLevel).toEqual(-1);
        expect(reports.totalAudioEnergy).toEqual(-1);
        break;
      default:
        expect(reports.jitter).toEqual(-1);
        expect(reports.packetsLost).toEqual(-1);
        expect(reports.roundTripTime).toEqual(-1);
        expect(reports.audioLevel).toEqual(-1);
        expect(reports.totalAudioEnergy).toEqual(-1);
    }
    // todo - edge & others
  });
});

describe('Video Input Reports - ', function (): void {
  let reports: VideoInputReports;
  switch (browserDetails.browser) {
    case 'chrome':
      reports = new VideoInputReports(chromeInOriginalReports);
      break;
    case 'firefox':
      reports = new VideoInputReports(firefoxInOriginalReports);
      break;
    case 'safari':
      reports = new VideoInputReports(safariInOriginalReports);
      break;
  }

  it(browserDetails.browser, function (): void {
    expect(reports.bytesReceived).toBeGreaterThanOrEqual(0);
    expect(reports.packetsReceived).toBeGreaterThanOrEqual(0);
    expect(reports.packetsLost).toBeGreaterThanOrEqual(0);
    expect(reports.nackCount).toBeGreaterThanOrEqual(0);
    expect(reports.pliCount).toBeGreaterThanOrEqual(0);
    expect(reports.firCount).toBeGreaterThanOrEqual(0);

    expect(reports.framesDecoded).toBeGreaterThanOrEqual(0);

    switch (browserDetails.browser) {
      case 'chrome':
        expect(reports.frameWidth).toBeGreaterThanOrEqual(0);
        expect(reports.frameHeight).toBeGreaterThanOrEqual(0);
        expect(reports.framesReceived).toBeGreaterThanOrEqual(0);
        expect(reports.framesDropped).toBeGreaterThanOrEqual(0);
        expect(reports.jitter).toEqual(-1);
        break;
      case 'firefox':
        expect(reports.frameWidth).toEqual(-1);
        expect(reports.frameHeight).toEqual(-1);
        expect(reports.framesReceived).toEqual(-1);
        expect(reports.framesDropped).toEqual(-1);
        expect(reports.jitter).toBeGreaterThanOrEqual(0);
        break;
      case 'safari':
        expect(reports.frameWidth).toBeGreaterThanOrEqual(0);
        expect(reports.frameHeight).toBeGreaterThanOrEqual(0);
        expect(reports.framesReceived).toBeGreaterThanOrEqual(0);
        expect(reports.framesDropped).toBeGreaterThanOrEqual(0);
        expect(reports.jitter).toEqual(-1);
        break;
      default:
        expect(reports.frameWidth).toEqual(-1);
        expect(reports.frameHeight).toEqual(-1);
        expect(reports.framesReceived).toEqual(-1);
        expect(reports.framesDropped).toEqual(-1);
        expect(reports.jitter).toEqual(-1);
    }
    // todo - edge & others
  });
});

describe('Video Output Reports - ', function (): void {
  let reports: VideoOutputReports;
  switch (browserDetails.browser) {
    case 'chrome':
      reports = new VideoOutputReports(chromeOutOriginalReports);
      break;
    case 'firefox':
      reports = new VideoOutputReports(firefoxOutOriginalReports);
      break;
    case 'safari':
      reports = new VideoOutputReports(safariOutOriginalReports);
      break;
  }
  it(browserDetails.browser, function (): void {
    expect(reports.bytesSent).toBeGreaterThanOrEqual(0);
    expect(reports.packetsSent).toBeGreaterThanOrEqual(0);
    expect(reports.nackCount).toBeGreaterThanOrEqual(0);
    expect(reports.pliCount).toBeGreaterThanOrEqual(0);
    expect(reports.firCount).toBeGreaterThanOrEqual(0);
    expect(reports.framesEncoded).toBeGreaterThanOrEqual(0);

    switch (browserDetails.browser) {
      case 'chrome':
        expect(reports.frameWidth).toBeGreaterThanOrEqual(0);
        expect(reports.frameHeight).toBeGreaterThanOrEqual(0);
        expect(reports.packetsLost).toBeGreaterThanOrEqual(0);
        expect(reports.jitter).toBeGreaterThanOrEqual(0);
        expect(reports.roundTripTime).toBeGreaterThanOrEqual(0);
        expect(reports.framesSent).toBeGreaterThanOrEqual(0);
        break;
      case 'firefox':
        expect(reports.frameWidth).toEqual(-1);
        expect(reports.frameHeight).toEqual(-1);
        expect(reports.packetsLost).toBeGreaterThanOrEqual(0);
        expect(reports.jitter).toBeGreaterThanOrEqual(0);
        expect(reports.roundTripTime).toBeGreaterThanOrEqual(0);
        expect(reports.framesSent).toEqual(-1);
        break;
      case 'safari':
        expect(reports.frameWidth).toBeGreaterThanOrEqual(0);
        expect(reports.frameHeight).toBeGreaterThanOrEqual(0);
        expect(reports.packetsLost).toEqual(-1);
        expect(reports.jitter).toEqual(-1);
        expect(reports.roundTripTime).toEqual(-1);
        expect(reports.framesSent).toBeGreaterThanOrEqual(0);
        break;
      default:
        expect(reports.frameWidth).toEqual(-1);
        expect(reports.frameHeight).toEqual(-1);
        expect(reports.packetsLost).toEqual(-1);
        expect(reports.jitter).toEqual(-1);
        expect(reports.roundTripTime).toEqual(-1);
        expect(reports.framesSent).toEqual(-1);
    }
    // todo - edge & others
  });
});
