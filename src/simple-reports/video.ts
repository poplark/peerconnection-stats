import browserDetails from '../utils/browser';
import { SimpleReports } from './base';

export class VideoInputReports extends SimpleReports {
  /**
   * chrome - { type: track, kind: video }
   * safari - { type: track }
   */
  get frameWidth(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('frameWidth', { type: 'track', kind: 'video' });
      case 'safari':
        return this._find('frameWidth', { type: 'track' });
      default:
    }
    return -1;
  }
  get frameHeight(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('frameHeight', { type: 'track', kind: 'video' });
      case 'safari':
        return this._find('frameHeight', { type: 'track' });
      default:
    }
    return -1;
  }
  get framesReceived(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('framesReceived', { type: 'track', kind: 'video' });
      case 'safari':
        return this._find('framesReceived', { type: 'track' });
      default:
    }
    return -1;
  }
  get framesDropped(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('framesDropped', { type: 'track', kind: 'video' });
      case 'safari':
        return this._find('framesDropped', { type: 'track' });
      default:
    }
    return -1;
  }

  /**
   * chrome - { type: inbound-rtp, mediaType: video }
   * firefox - { type: inbound-rtp, mediaType: video }
   * safari - { type: inbound-rtp, mediaType: video }
   */
  get bytesReceived(): number {
    return this._find('bytesReceived', { type: 'inbound-rtp', mediaType: 'video' });
  }
  get packetsReceived(): number {
    return this._find('packetsReceived', { type: 'inbound-rtp', mediaType: 'video' });
  }
  get packetsLost(): number {
    return this._find('packetsLost', { type: 'inbound-rtp', mediaType: 'video' });
  }
  get nackCount(): number {
    return this._find('nackCount', { type: 'inbound-rtp', mediaType: 'video' });
  }
  get pliCount(): number {
    return this._find('pliCount', { type: 'inbound-rtp', mediaType: 'video' });
  }
  get firCount(): number {
    return this._find('firCount', { type: 'inbound-rtp', mediaType: 'video' });
  }

  /**
   * chrome - { type: track, kind: video }
   * firefox - { type: inbound-rtp, kind: video }
   * safari - { type: track }
   */
  get framesDecoded(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('framesDecoded', { type: 'track', kind: 'video' });
      case 'firefox':
        return this._find('framesDecoded', { type: 'inbound-rtp', kind: 'video' });
      case 'safari':
        return this._find('framesDecoded', { type: 'track' });
      default:
    }
    return -1;
  }

  /**
   * firefox - { type: inbound-rtp, kind: video }
   */
  get jitter(): number {
    switch (browserDetails.browser) {
      case 'firefox':
        return this._find('jitter', { type: 'inbound-rtp', kind: 'video' });
      default:
    }
    return -1;
  }
}

/* todo - simplify
['bytesReceived', 'packetsReceived', 'packetsLost', 'pliCount', 'firCount'].forEach(key => {
  Object.defineProperty(VideoInputReports.prototype, key, {
    get() {
      switch (browserDetails.browser) {
        case 'chrome':
        case 'firefox':
        case 'safari':
          return this._find(key, { type: 'inbound-rtp', mediaType: 'video' });
        default:
      }
      return -1;
    }
  });
})
*/

export class VideoOutputReports extends SimpleReports {
  /**
   * chrome - { type: track, kind: video }
   * safari - { type: track }
   */
  get frameWidth(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('frameWidth', { type: 'track', kind: 'video' });
      case 'safari':
        return this._find('frameWidth', { type: 'track' });
      default:
    }
    return -1;
  }
  get frameHeight(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('frameHeight', { type: 'track', kind: 'video' });
      case 'safari':
        return this._find('frameHeight', { type: 'track' });
      default:
    }
    return -1;
  }

  /**
   * chrome - { type: outbound-rtp, mediaType: video }
   * firefox = { type: outbound-rtp, mediaType: video}
   * safari = { type: outbound-rtp, mediaType: video}
   */
  get bytesSent(): number {
    return this._find('bytesSent', { type: 'outbound-rtp', mediaType: 'video' });
  }
  get packetsSent(): number {
    return this._find('packetsSent', { type: 'outbound-rtp', mediaType: 'video' });
  }
  get nackCount(): number {
    return this._find('nackCount', { type: 'outbound-rtp', mediaType: 'video' });
  }
  get pliCount(): number {
    return this._find('pliCount', { type: 'outbound-rtp', mediaType: 'video' });
  }
  get firCount(): number {
    return this._find('firCount', { type: 'outbound-rtp', mediaType: 'video' });
  }
  get framesEncoded(): number {
    return this._find('framesEncoded', { type: 'outbound-rtp', mediaType: 'video' });
  }

  /**
   * chrome - { type: remote-inbound-rtp, kind: video }
   * firefox - { type: remote-inbound-rtp, kind: video }
   */
  get packetsLost(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'firefox':
        return this._find('packetsLost', { type: 'remote-inbound-rtp', kind: 'video' });
      default:
    }
    return -1;
  }
  get jitter(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'firefox':
        return this._find('jitter', { type: 'remote-inbound-rtp', kind: 'video' });
      default:
    }
    return -1;
  }
  get roundTripTime(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'firefox':
        return this._find('roundTripTime', { type: 'remote-inbound-rtp', kind: 'video' });
      default:
    }
    return -1;
  }

  /**
   * chrome - { type: track, kind: video }
   * safari - { type: track }
   */
  get framesSent(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('framesSent', { type: 'track', kind: 'video' });
      case 'safari':
        return this._find('framesSent', { type: 'track' });
      default:
    }
    return -1;
  }
}

/* todo - simplify
['bytesSent', 'packetsSent', 'nackCount', 'pliCount', 'firCount', 'framesEncoded'].forEach(key => {
  Object.defineProperty(VideoOutputReports.prototype, key, {
    get() {
      switch (browserDetails.browser) {
        case 'chrome':
        case 'firefox':
        case 'safari':
          return this._find(key, { type: 'outbound-rtp', mediaType: 'video' });
        default:
      }
      return -1;
    }
  });
})
*/

// ============== todo - Legacy ================/

// chrome - { type: ssrc, mediaType: video }
export class VedioInputLegacyReports extends SimpleReports {
  frameWidth: number; // googFrameWidthReceived
  frameHeight: number; // googFrameHeightReceived

  bytesReceived: number;
  packetsReceived: number;
  packetsLost: number;

  nackCount: number; // googNacksSent
  pliCount: number; // googPlisSent
  firCount: number; // googFirsSent

  // framesReceived: number; // no corresponding data
  // framesDropped: number; // no corresponding data
  framesDecoded: number;
}

// chrome - { type: ssrc, mediaType: video }
export class VideoOutputLegacyReports extends SimpleReports {
  frameWidth: number; // googFrameWidthSent
  frameHeight: number;  // googFrameHeightSent

  bytesSent: number;
  packetsSent: number;
  nackCount: number; // googNacksReceived
  pliCount: number; // googPlisReceived
  firCount: number; // googFirsReceived
  framesEncoded: number

  packetsLost: number;
  // jitter: number; // no corresponding data
  roundTripTime: number; // googRtt - ms

  // framesSent: number; // no corresponding data
}