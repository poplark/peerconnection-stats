import browserDetails from '../utils/browser';
import { Reports } from '../report';

export class VideoInputReports extends Reports {
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
        return this._find('frameWidth');
    }
  }
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
        return this._find('framesDecoded');
    }
  }

  /**
   * firefox - { type: inbound-rtp, kind: video }
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
}

export class VideoOutputReports extends Reports {
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
        return this._find('frameWidth');
    }
  }
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
        // todo - mediaType ?
        return this._find('packetsLost', { mediaType: 'video' });
    }
  }
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
        return this._find('framesSent');
    }
  }
}

// ============== Chrome - Legacy ================/

// chrome - { type: ssrc, mediaType: video }
export class VideoInputLegacyReports extends Reports {
  // refer to googFrameWidthReceived
  get frameWidth(): number {
    return this._find('googFrameWidthReceived', { type: 'ssrc', mediaType: 'video' });
  }
  // refer to - googFrameHeightReceived
  get frameHeight(): number {
    return this._find('googFrameHeightReceived', { type: 'ssrc', mediaType: 'video' });
  }

  get bytesReceived(): number {
    return this._find('bytesReceived', { type: 'ssrc', mediaType: 'video' });
  }
  get packetsReceived(): number {
    return this._find('packetsReceived', { type: 'ssrc', mediaType: 'video' });
  }
  get packetsLost(): number {
    return this._find('packetsLost', { type: 'ssrc', mediaType: 'video' });
  }

  // refer to - googNacksSent
  get nackCount(): number {
    return this._find('googNacksSent', { type: 'ssrc', mediaType: 'video' });
  }
  // refer to - googPlisSent
  get pliCount(): number {
    return this._find('googPlisSent', { type: 'ssrc', mediaType: 'video' });
  }
  // refer to - googFirsSent
  get firCount(): number {
    return this._find('googFirsSent', { type: 'ssrc', mediaType: 'video' });
  }

  // framesReceived: number; // no corresponding data
  // framesDropped: number; // no corresponding data
  get framesDecoded(): number {
    return this._find('framesDecoded', { type: 'ssrc', mediaType: 'video' });
  }
}

// chrome - { type: ssrc, mediaType: video }
export class VideoOutputLegacyReports extends Reports {
  // refer to - googFrameWidthSent
  get frameWidth(): number {
    return this._find('googFrameWidthSent', { type: 'ssrc', mediaType: 'video' });
  }
  // refer to - googFrameHeightSent
  get frameHeight(): number {
    return this._find('googFrameHeightSent', { type: 'ssrc', mediaType: 'video' });
  }

  get bytesSent(): number {
    return this._find('bytesSent', { type: 'ssrc', mediaType: 'video' });
  }
  get packetsSent(): number {
    return this._find('packetsSent', { type: 'ssrc', mediaType: 'video' });
  }
  // refer to - googNacksReceived
  get nackCount(): number {
    return this._find('googNacksReceived', { type: 'ssrc', mediaType: 'video' });
  }
  // refer to - googPlisReceived
  get pliCount(): number {
    return this._find('googPlisReceived', { type: 'ssrc', mediaType: 'video' });
  }
  // refer to - googFirsReceived
  get firCount(): number {
    return this._find('googFirsReceived', { type: 'ssrc', mediaType: 'video' });
  }
  get framesEncoded(): number {
    return this._find('framesEncoded', { type: 'ssrc', mediaType: 'video' });
  }

  get packetsLost(): number {
    return this._find('packetsLost', { type: 'ssrc', mediaType: 'video' });
  }
  // jitter: number; // no corresponding data

  // refer to - googRtt - ms
  get roundTripTime(): number {
    return this._find('googRtt', { type: 'ssrc', mediaType: 'video' });
  }

  // framesSent: number; // no corresponding data
}