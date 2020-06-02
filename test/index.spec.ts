// use samples data to test
// import { Reports } from '../src/report';
import browserDetails from '../src/utils/browser';
import { parse } from '../src/utils/parser';
import {
  AudioInputReports,
  AudioOutputReports,
  AudioInputLegacyReports,
  AudioOutputLegacyReports,
  VideoInputReports,
  VideoOutputReports,
  VideoInputLegacyReports,
  VideoOutputLegacyReports,
  CandidatePairReports,
  CandidatePairLegacyReports,
} from '../src';

import {
  chromeInOriginalReports,
  chromeOutOriginalReports,
  chromeInLegacyOriginalReports,
  chromeOutLegacyOriginalReports,
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

describe('Audio Input Legacy Reports - ', function(): void {
  let reports: AudioInputLegacyReports;
  if (browserDetails.browser === 'chrome') {
    reports = new AudioInputLegacyReports(chromeInLegacyOriginalReports);
    it(browserDetails.browser, function (): void {
      expect(reports.bytesReceived).toBeGreaterThanOrEqual(0);
      // expect(reports.jitter).toBeGreaterThanOrEqual(0);
      expect(reports.packetsLost).toBeGreaterThanOrEqual(0);
      expect(reports.packetsReceived).toBeGreaterThanOrEqual(0);
      expect(reports.audioLevel).toBeGreaterThanOrEqual(0);
      expect(reports.totalAudioEnergy).toBeGreaterThanOrEqual(0);
      expect('' + reports.bytesReceived).toEqual(reports.find('bytesReceived', { type: 'ssrc', mediaType: 'audio' })[0].value as string);
      expect('' + reports.packetsLost).toEqual(reports.find('packetsLost', { type: 'ssrc', mediaType: 'audio' })[0].value as string);
      expect('' + reports.packetsReceived).toEqual(reports.find('packetsReceived', { type: 'ssrc', mediaType: 'audio' })[0].value as string);
      expect('' + reports.audioLevel).toEqual(reports.find('audioOutputLevel', { type: 'ssrc', mediaType: 'audio' })[0].value as string);
      expect('' + reports.totalAudioEnergy).toEqual(reports.find('totalAudioEnergy', { type: 'ssrc', mediaType: 'audio' })[0].value as string);
      // 加速率
      expect(parse((reports.find('googAccelerateRate', { type: 'ssrc', mediaType: 'audio' })[0].value) as string)).toBeGreaterThanOrEqual(0);
      // 抖动反馈
      expect(parse((reports.find('googJitterReceived', { type: 'ssrc', mediaType: 'audio' })[0].value) as string)).toBeGreaterThanOrEqual(0);
      // 抗丢包解码
      expect(parse((reports.find('googDecodingPLC', { type: 'ssrc', mediaType: 'audio' })[0].value) as string)).toBeGreaterThanOrEqual(0);
      // 伸缩率
      expect(parse((reports.find('googExpandRate', { type: 'ssrc', mediaType: 'audio' })[0].value) as string)).toBeGreaterThanOrEqual(0);
      // 伸缩抢占率
      expect(parse((reports.find('googPreemptiveExpandRate', { type: 'ssrc', mediaType: 'audio' })[0].value) as string)).toBeGreaterThanOrEqual(0);
    });
  }
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

describe('Audio Output Legacy Reports - ', function(): void {
  let reports: AudioOutputLegacyReports;
  if (browserDetails.browser === 'chrome') {
    reports = new AudioOutputLegacyReports(chromeOutLegacyOriginalReports);
    it(browserDetails.browser, function (): void {
      expect(reports.bytesSent).toBeGreaterThanOrEqual(0);
      // expect(reports.jitter).toBeGreaterThanOrEqual(0);
      expect(reports.packetsLost).toBeGreaterThanOrEqual(0);
      expect(reports.packetsSent).toBeGreaterThanOrEqual(0);
      expect(reports.roundTripTime).toBeGreaterThanOrEqual(0);
      expect(reports.audioLevel).toBeGreaterThanOrEqual(0);
      expect(reports.totalAudioEnergy).toBeGreaterThanOrEqual(0);

      expect('' + reports.bytesSent).toEqual(reports.find('bytesSent', { type: 'ssrc', mediaType: 'audio' })[0].value as string);
      expect('' + reports.packetsLost).toEqual(reports.find('packetsLost', { type: 'ssrc', mediaType: 'audio' })[0].value as string);
      expect('' + reports.packetsSent).toEqual(reports.find('packetsSent', { type: 'ssrc', mediaType: 'audio' })[0].value as string);
      expect('' + reports.roundTripTime).toEqual(reports.find('googRtt', { type: 'ssrc', mediaType: 'audio' })[0].value as string);
      // 采集音频幅度
      expect('' + reports.audioLevel).toEqual(reports.find('audioInputLevel', { type: 'ssrc', mediaType: 'audio' })[0].value as string);
      // 总音频发送量
      expect('' + reports.totalAudioEnergy).toEqual(reports.find('totalAudioEnergy', { type: 'ssrc', mediaType: 'audio' })[0].value as string);
      // 抖动反馈
      expect(parse((reports.find('googJitterReceived', { type: 'ssrc', mediaType: 'audio' })[0].value) as string)).toBeGreaterThanOrEqual(0);
    });
  }
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

describe('Video Input Legacy Reports - ', function (): void {
  let reports: VideoInputLegacyReports;
  if (browserDetails.browser === 'chrome') {
    reports = new VideoInputLegacyReports(chromeInLegacyOriginalReports);

    it(browserDetails.browser, function (): void {
      expect(reports.bytesReceived).toBeGreaterThanOrEqual(0);
      expect(reports.packetsReceived).toBeGreaterThanOrEqual(0);
      expect(reports.packetsLost).toBeGreaterThanOrEqual(0);
      expect(reports.nackCount).toBeGreaterThanOrEqual(0);
      expect(reports.pliCount).toBeGreaterThanOrEqual(0);
      expect(reports.firCount).toBeGreaterThanOrEqual(0);

      expect(reports.framesDecoded).toBeGreaterThanOrEqual(0);

      expect(reports.frameWidth).toBeGreaterThanOrEqual(0);
      expect(reports.frameHeight).toBeGreaterThanOrEqual(0);

      expect('' + reports.bytesReceived).toEqual(reports.find('bytesReceived', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.packetsReceived).toEqual(reports.find('packetsReceived', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.packetsLost).toEqual(reports.find('packetsLost', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.nackCount).toEqual(reports.find('googNacksSent', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.pliCount).toEqual(reports.find('googPlisSent', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.firCount).toEqual(reports.find('googFirsSent', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.frameWidth).toEqual(reports.find('googFrameWidthReceived', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.frameHeight).toEqual(reports.find('googFrameHeightReceived', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.framesDecoded).toEqual(reports.find('framesDecoded', { type: 'ssrc', mediaType: 'video' })[0].value as string);
    });
  }
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

describe('Video Output Legacy Reports - ', function (): void {
  let reports: VideoOutputLegacyReports;
  if (browserDetails.browser === 'chrome') {
    reports = new VideoOutputLegacyReports(chromeOutLegacyOriginalReports);

    it(browserDetails.browser, function (): void {
      expect(reports.bytesSent).toBeGreaterThanOrEqual(0);
      expect(reports.packetsSent).toBeGreaterThanOrEqual(0);
      expect(reports.nackCount).toBeGreaterThanOrEqual(0);
      expect(reports.pliCount).toBeGreaterThanOrEqual(0);
      expect(reports.firCount).toBeGreaterThanOrEqual(0);
      expect(reports.framesEncoded).toBeGreaterThanOrEqual(0);

      expect(reports.frameWidth).toBeGreaterThanOrEqual(0);
      expect(reports.frameHeight).toBeGreaterThanOrEqual(0);
      expect(reports.packetsLost).toBeGreaterThanOrEqual(0);
      expect(reports.roundTripTime).toBeGreaterThanOrEqual(0);

      expect('' + reports.bytesSent).toEqual(reports.find('bytesSent', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.packetsSent).toEqual(reports.find('packetsSent', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.nackCount).toEqual(reports.find('googNacksReceived', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.pliCount).toEqual(reports.find('googPlisReceived', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.firCount).toEqual(reports.find('googFirsReceived', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.framesEncoded).toEqual(reports.find('framesEncoded', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.frameWidth).toEqual(reports.find('googFrameWidthSent', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.frameHeight).toEqual(reports.find('googFrameHeightSent', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.packetsLost).toEqual(reports.find('packetsLost', { type: 'ssrc', mediaType: 'video' })[0].value as string);
      expect('' + reports.roundTripTime).toEqual(reports.find('googRtt', { type: 'ssrc', mediaType: 'video' })[0].value as string);
    });
  }
});

describe('Candidate Pair Reports (In) - ', function (): void {
  let reports: CandidatePairReports;
  switch (browserDetails.browser) {
    case 'chrome':
      reports = new CandidatePairReports(chromeInOriginalReports);
      break;
    case 'firefox':
      reports = new CandidatePairReports(firefoxInOriginalReports);
      break;
    case 'safari':
      reports = new CandidatePairReports(safariInOriginalReports);
      break;
  }
  it(browserDetails.browser, function (): void {
    expect(reports.bytesSent).toBeGreaterThanOrEqual(0);
    expect(reports.bytesReceived).toBeGreaterThanOrEqual(0);

    switch (browserDetails.browser) {
      case 'chrome':
        expect(reports.currentRoundTripTime).toBeGreaterThanOrEqual(0);
        expect(reports.totalRoundTripTime).toBeGreaterThanOrEqual(0);
        break;
      case 'firefox':
        expect(reports.currentRoundTripTime).toEqual(-1);
        expect(reports.totalRoundTripTime).toEqual(-1);
        break;
      case 'safari':
        expect(reports.currentRoundTripTime).toBeGreaterThanOrEqual(0);
        expect(reports.totalRoundTripTime).toBeGreaterThanOrEqual(0);
        break;
      default:
        expect(reports.currentRoundTripTime).toEqual(-1);
        expect(reports.totalRoundTripTime).toEqual(-1);
    }
    // todo - edge & others
  });
});

describe('Candidate Pair Legacy Reports (In) - ', function (): void {
  let reports: CandidatePairLegacyReports;
  if (browserDetails.browser === 'chrome') {
    reports = new CandidatePairLegacyReports(chromeInLegacyOriginalReports);

    it(browserDetails.browser, function (): void {
      expect(reports.bytesSent).toBeGreaterThanOrEqual(0);
      expect(reports.bytesReceived).toBeGreaterThanOrEqual(0);
      expect(reports.packetsSent).toBeGreaterThanOrEqual(0);
      expect(reports.currentRoundTripTime).toBeGreaterThanOrEqual(0);

      expect('' + reports.bytesSent).toEqual(reports.find('bytesSent', { type: 'googCandidatePair' })[0].value as string);
      expect('' + reports.bytesReceived).toEqual(reports.find('bytesReceived', { type: 'googCandidatePair' })[0].value as string);
      expect('' + reports.packetsSent).toEqual(reports.find('packetsSent', { type: 'googCandidatePair' })[0].value as string);
      expect('' + reports.currentRoundTripTime).toEqual(reports.find('googRtt', { type: 'googCandidatePair' })[0].value as string);
    });
  }
});

describe('Candidate Pair Reports (Out) - ', function (): void {
  let reports: CandidatePairReports;
  switch (browserDetails.browser) {
    case 'chrome':
      reports = new CandidatePairReports(chromeOutOriginalReports);
      break;
    case 'firefox':
      reports = new CandidatePairReports(firefoxOutOriginalReports);
      break;
    case 'safari':
      reports = new CandidatePairReports(safariOutOriginalReports);
      break;
  }
  it(browserDetails.browser, function (): void {
    expect(reports.bytesSent).toBeGreaterThanOrEqual(0);
    expect(reports.bytesReceived).toBeGreaterThanOrEqual(0);

    switch (browserDetails.browser) {
      case 'chrome':
        expect(reports.currentRoundTripTime).toBeGreaterThanOrEqual(0);
        expect(reports.totalRoundTripTime).toBeGreaterThanOrEqual(0);
        break;
      case 'firefox':
        expect(reports.currentRoundTripTime).toEqual(-1);
        expect(reports.totalRoundTripTime).toEqual(-1);
        break;
      case 'safari':
        expect(reports.currentRoundTripTime).toBeGreaterThanOrEqual(0);
        expect(reports.totalRoundTripTime).toBeGreaterThanOrEqual(0);
        break;
      default:
        expect(reports.currentRoundTripTime).toEqual(-1);
        expect(reports.totalRoundTripTime).toEqual(-1);
    }
    // todo - edge & others
  });
});

describe('Candidate Pair Legacy Reports (Out) - ', function (): void {
  let reports: CandidatePairLegacyReports;
  if (browserDetails.browser === 'chrome') {
    reports = new CandidatePairLegacyReports(chromeOutLegacyOriginalReports);

    it(browserDetails.browser, function (): void {
      expect(reports.bytesSent).toBeGreaterThanOrEqual(0);
      expect(reports.bytesReceived).toBeGreaterThanOrEqual(0);
      expect(reports.packetsSent).toBeGreaterThanOrEqual(0);
      expect(reports.currentRoundTripTime).toBeGreaterThanOrEqual(0);

      expect('' + reports.bytesSent).toEqual(reports.find('bytesSent', { type: 'googCandidatePair' })[0].value as string);
      expect('' + reports.bytesReceived).toEqual(reports.find('bytesReceived', { type: 'googCandidatePair' })[0].value as string);
      expect('' + reports.packetsSent).toEqual(reports.find('packetsSent', { type: 'googCandidatePair' })[0].value as string);
      expect('' + reports.currentRoundTripTime).toEqual(reports.find('googRtt', { type: 'googCandidatePair' })[0].value as string);
    });
  }
});
