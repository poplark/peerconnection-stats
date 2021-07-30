import browserDetails from '../utils/browser';
import { Reports } from '../report';

export class VideoInputReports extends Reports {
  /**
   * **Note** (Data from):
   * - chrome - { type: 'track', kind: 'video' }
   * - firefox - no corresponding data
   * - safari - { type: 'track' }
   */
  get frameWidth(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('frameWidth', { type: 'track', kind: 'video' });
      case 'safari':
        return this._find('frameWidth', { type: 'track' });
      default:
        return this._find('frameWidth');
    }
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'track', kind: 'video' }
   * - firefox - no corresponding data
   * - safari - { type: 'track' }
   */
  get frameHeight(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('frameHeight', { type: 'track', kind: 'video' });
      case 'safari':
        return this._find('frameHeight', { type: 'track' });
      default:
        return this._find('frameHeight');
    }
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'track', kind: 'video' }
   * - firefox - no corresponding data
   * - safari - { type: 'track' }
   */
  get framesReceived(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('framesReceived', { type: 'track', kind: 'video' });
      case 'safari':
        return this._find('framesReceived', { type: 'track' });
      default:
        return this._find('framesReceived');
    }
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'track', kind: 'video' }
   * - firefox - no corresponding data
   * - safari - { type: 'track' }
   */
  get framesDropped(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('framesDropped', { type: 'track', kind: 'video' });
      case 'safari':
        return this._find('framesDropped', { type: 'track' });
      default:
        return this._find('framesDropped');
    }
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: ''inbound-rtp', mediaType: 'video' }
   * - firefox - { type: ''inbound-rtp', mediaType: 'video' }
   * - safari - { type: ''inbound-rtp', mediaType: 'video' }
   */
  get bytesReceived(): number {
    return this._find('bytesReceived', { type: 'inbound-rtp', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: ''inbound-rtp', mediaType: 'video' }
   * - firefox - { type: ''inbound-rtp', mediaType: 'video' }
   * - safari - { type: ''inbound-rtp', mediaType: 'video' }
   */
  get packetsReceived(): number {
    return this._find('packetsReceived', { type: 'inbound-rtp', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: ''inbound-rtp', mediaType: 'video' }
   * - firefox - { type: ''inbound-rtp', mediaType: 'video' }
   * - safari - { type: ''inbound-rtp', mediaType: 'video' }
   */
  get packetsLost(): number {
    return this._find('packetsLost', { type: 'inbound-rtp', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: ''inbound-rtp', mediaType: 'video' }
   * - firefox - { type: ''inbound-rtp', mediaType: 'video' }
   * - safari - { type: ''inbound-rtp', mediaType: 'video' }
   */
  get nackCount(): number {
    return this._find('nackCount', { type: 'inbound-rtp', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: ''inbound-rtp', mediaType: 'video' }
   * - firefox - { type: ''inbound-rtp', mediaType: 'video' }
   * - safari - { type: ''inbound-rtp', mediaType: 'video' }
   */
  get pliCount(): number {
    return this._find('pliCount', { type: 'inbound-rtp', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: ''inbound-rtp', mediaType: 'video' }
   * - firefox - { type: ''inbound-rtp', mediaType: 'video' }
   * - safari - { type: ''inbound-rtp', mediaType: 'video' }
   */
  get firCount(): number {
    return this._find('firCount', { type: 'inbound-rtp', mediaType: 'video' });
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'track', kind: 'video' }
   * - firefox - { type: 'inbound-rtp', kind: 'video' }
   * - safari - { type: 'track' }
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
        return this._find('framesDecoded');
    }
  }

  /**
   * **Note** (Data from):
   * - chrome - no corresponding data
   * - firefox - { type: 'inbound-rtp', kind: 'video' }
   * - safari - no corresponding data
   */
  get jitter(): number {
    switch (browserDetails.browser) {
      case 'firefox':
        return this._find('jitter', { type: 'inbound-rtp', kind: 'video' });
      default:
        // todo - mediaType ?
        return this._find('jitter', { mediaType: 'video' });
    }
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'inbound-rtp', mediaType: 'video' }
   * - firefox - { type: 'inbound-rtp', mediaType: 'video' }
   * - safari - { type: 'inbound-rtp', mediaType: 'video' }
   */
  get ssrc(): number {
    return this._find('ssrc', { type: 'inbound-rtp', mediaType: 'video' });
  }
}

export class VideoOutputReports extends Reports {
  /**
   * **Note** (Data from):
   * - chrome - { type: 'media-source', kind: 'video' }
   * - firefox - N/A
   * - safari - N/A
   */
  get width(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('width', { type: 'media-source', kind: 'video' });
      default:
        return this._find('width');
    }
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'media-source', kind: 'video' }
   * - firefox - N/A
   * - safari - N/A
   */
  get height(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('height', { type: 'media-source', kind: 'video' });
      default:
        return this._find('height');
    }
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'media-source', kind: 'video' }
   * - firefox - N/A
   * - safari - N/A
   */
  get framesPerSecond(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('framesPerSecond', { type: 'media-source', kind: 'video' });
      default:
        return this._find('frames');
    }
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'media-source', kind: 'video' }
   * - firefox - N/A
   * - safari - N/A
   */
  get frames(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('frames', { type: 'media-source', kind: 'video' });
      default:
        return this._find('frames');
    }
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'track', kind: 'video' }
   * - firefox - no corresponding data
   * - safari - { type: 'track' }
   */
  get frameWidth(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('frameWidth', { type: 'track', kind: 'video' });
      case 'safari':
        return this._find('frameWidth', { type: 'track' });
      default:
        return this._find('frameWidth');
    }
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'track', kind: 'video' }
   * - firefox - no corresponding data
   * - safari - { type: 'track' }
   */
  get frameHeight(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('frameHeight', { type: 'track', kind: 'video' });
      case 'safari':
        return this._find('frameHeight', { type: 'track' });
      default:
        return this._find('frameHeight');
    }
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'outbound-rtp', mediaType: 'video' }
   * - firefox - { type: 'outbound-rtp', mediaType: 'video' }
   * - safari - { type: 'outbound-rtp', mediaType: 'video' }
   */
  get bytesSent(): number {
    return this._find('bytesSent', { type: 'outbound-rtp', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'outbound-rtp', mediaType: 'video' }
   * - firefox - { type: 'outbound-rtp', mediaType: 'video' }
   * - safari - { type: 'outbound-rtp', mediaType: 'video' }
   */
  get packetsSent(): number {
    return this._find('packetsSent', { type: 'outbound-rtp', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'outbound-rtp', mediaType: 'video' }
   * - firefox - { type: 'outbound-rtp', mediaType: 'video' }
   * - safari - { type: 'outbound-rtp', mediaType: 'video' }
   */
  get nackCount(): number {
    return this._find('nackCount', { type: 'outbound-rtp', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'outbound-rtp', mediaType: 'video' }
   * - firefox - { type: 'outbound-rtp', mediaType: 'video' }
   * - safari - { type: 'outbound-rtp', mediaType: 'video' }
   */
  get pliCount(): number {
    return this._find('pliCount', { type: 'outbound-rtp', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'outbound-rtp', mediaType: 'video' }
   * - firefox - { type: 'outbound-rtp', mediaType: 'video' }
   * - safari - { type: 'outbound-rtp', mediaType: 'video' }
   */
  get firCount(): number {
    return this._find('firCount', { type: 'outbound-rtp', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'outbound-rtp', mediaType: 'video' }
   * - firefox - { type: 'outbound-rtp', mediaType: 'video' }
   * - safari - { type: 'outbound-rtp', mediaType: 'video' }
   */
  get framesEncoded(): number {
    return this._find('framesEncoded', { type: 'outbound-rtp', mediaType: 'video' });
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'remote-inbound-rtp', kind: 'video' }
   * - firefox - { type: 'remote-inbound-rtp', kind: 'video' }
   * - safari - no corresponding data
   */
  get packetsLost(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'firefox':
        return this._find('packetsLost', { type: 'remote-inbound-rtp', kind: 'video' });
      default:
        // todo - mediaType ?
        return this._find('packetsLost', { mediaType: 'video' });
    }
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'remote-inbound-rtp', kind: 'video' }
   * - firefox - { type: 'remote-inbound-rtp', kind: 'video' }
   * - safari - no corresponding data
   */
  get jitter(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'firefox':
        return this._find('jitter', { type: 'remote-inbound-rtp', kind: 'video' });
      default:
        // todo - mediaType ?
        return this._find('jitter', { mediaType: 'video' });
    }
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'remote-inbound-rtp', kind: 'video' }
   * - firefox - { type: 'remote-inbound-rtp', kind: 'video' }
   * - safari - no corresponding data
   */
  get roundTripTime(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'firefox':
        return this._find('roundTripTime', { type: 'remote-inbound-rtp', kind: 'video' });
      default:
        return this._find('roundTripTime', { mediaType: 'video' });
    }
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'track', kind: 'video' }
   * - firefox - no corresponding data
   * - safari - { type: 'track' }
   */
  get framesSent(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('framesSent', { type: 'track', kind: 'video' });
      case 'safari':
        return this._find('framesSent', { type: 'track' });
      default:
        return this._find('framesSent');
    }
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'outbound-rtp', mediaType: 'video' }
   * - firefox - { type: 'outbound-rtp', mediaType: 'video' }
   * - safari - { type: 'outbound-rtp', mediaType: 'video' }
   */
  get ssrc(): number {
    return this._find('ssrc', { type: 'outbound-rtp', mediaType: 'video' });
  }
}

// ============== Chrome - Legacy ================/

// - chrome - { type: 'ssrc', mediaType: 'video' }
export class VideoInputLegacyReports extends Reports {
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }, and the original source is `googFrameWidthReceived`
   */
  get frameWidth(): number {
    return this._find('googFrameWidthReceived', { type: 'ssrc', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }, and the original source is `googFrameHeightReceived`
   */
  get frameHeight(): number {
    return this._find('googFrameHeightReceived', { type: 'ssrc', mediaType: 'video' });
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }
   */
  get bytesReceived(): number {
    return this._find('bytesReceived', { type: 'ssrc', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }
   */
  get packetsReceived(): number {
    return this._find('packetsReceived', { type: 'ssrc', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }
   */
  get packetsLost(): number {
    return this._find('packetsLost', { type: 'ssrc', mediaType: 'video' });
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }, and the original source is `googNacksSent`
   */
  get nackCount(): number {
    return this._find('googNacksSent', { type: 'ssrc', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }, and the original source is `googPlisSent`
   */
  get pliCount(): number {
    return this._find('googPlisSent', { type: 'ssrc', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }, and the original source is `googFirsSent`
   */
  get firCount(): number {
    return this._find('googFirsSent', { type: 'ssrc', mediaType: 'video' });
  }

  // framesReceived: number; // no corresponding data
  // framesDropped: number; // no corresponding data

  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }
   */
  get framesDecoded(): number {
    return this._find('framesDecoded', { type: 'ssrc', mediaType: 'video' });
  }
}

// - chrome - { type: 'ssrc', mediaType: 'video' }
export class VideoOutputLegacyReports extends Reports {
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }, and the original source is `googFrameWidthSent`
   */
  get frameWidth(): number {
    return this._find('googFrameWidthSent', { type: 'ssrc', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }, and the original source is `googFrameHeightSent`
   */
  get frameHeight(): number {
    return this._find('googFrameHeightSent', { type: 'ssrc', mediaType: 'video' });
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }
   */
  get bytesSent(): number {
    return this._find('bytesSent', { type: 'ssrc', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }
   */
  get packetsSent(): number {
    return this._find('packetsSent', { type: 'ssrc', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }, and the original source is `googNacksReceived`
   */
  get nackCount(): number {
    return this._find('googNacksReceived', { type: 'ssrc', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }, and the original source is `googPlisReceived`
   */
  get pliCount(): number {
    return this._find('googPlisReceived', { type: 'ssrc', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }, and the original source is `googFirsReceived`
   */
  get firCount(): number {
    return this._find('googFirsReceived', { type: 'ssrc', mediaType: 'video' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }
   */
  get framesEncoded(): number {
    return this._find('framesEncoded', { type: 'ssrc', mediaType: 'video' });
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }
   */
  get packetsLost(): number {
    return this._find('packetsLost', { type: 'ssrc', mediaType: 'video' });
  }
  // jitter: number; // no corresponding data

  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'video' }, and the original source is `googRtt`
   */
  get roundTripTime(): number {
    return this._find('googRtt', { type: 'ssrc', mediaType: 'video' });
  }

  // framesSent: number; // no corresponding data
}
