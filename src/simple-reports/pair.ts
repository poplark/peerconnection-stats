import browserDetails from '../utils/browser';
import { SimpleReports } from './base';

export class CandidatePairReports extends SimpleReports {
  /**
   * chrome - { type: candidate-pair }
   * firefox - { type: candidate-pair, selected: true }
   * safari - { type: candidate-pair }
   */
  get bytesSent(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'safari':
        return this._find('bytesSent', { type: 'candidate-pair' });
      case 'firefox':
        return this._find('bytesSent', { type: 'candidate-pair', selected: true });
      default:
        return this._find('bytesSent', { type: 'candidate-pair' });
    }
  }
  get bytesReceived(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'safari':
        return this._find('bytesReceived', { type: 'candidate-pair' });
      case 'firefox':
        return this._find('bytesReceived', { type: 'candidate-pair', selected: true });
      default:
        return this._find('bytesReceived', { type: 'candidate-pair' });
    }
  }

  /**
   * chrome - { type: candidate-pair }
   * safari - { type: candidate-pair }
   */
  get currentRoundTripTime(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'safari':
        return this._find('currentRoundTripTime', { type: 'candidate-pair' });
      default:
        return this._find('currentRoundTripTime', { type: 'candidate-pair' });
    }
  }
  get totalRoundTripTime(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'safari':
        return this._find('totalRoundTripTime', { type: 'candidate-pair' });
      default:
        return this._find('totalRoundTripTime', { type: 'candidate-pair' });
    }
  }
}

// ============== Chrome - Legacy ================/

export class CandidatePairLegacyReports extends SimpleReports {
  // chrome - { type: googCandidatePair }
  get bytesReceived(): number {
    return this._find('bytesReceived', { type: 'googCandidatePair' });
  }
  get bytesSent(): number {
    return this._find('bytesSent', { type: 'googCandidatePair' });
  }
  get packetsSent(): number {
    return this._find('packetsSent', { type: 'googCandidatePair' });
  }
  // refer to googRtt - ms
  get currentRoundTripTime(): number {
    return this._find('googRtt', { type: 'googCandidatePair' });
  }
}
