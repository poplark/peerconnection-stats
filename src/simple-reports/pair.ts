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
        return this._find('bytesSent', { type: 'candidate-pair' });
      case 'firefox':
        return this._find('bytesSent', { type: 'candidate-pair', selected: true });
      case 'safari':
        return this._find('bytesSent', { type: 'candidate-pair' });
      default:
    }
    return -1;
  }
  get bytesReceived(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('bytesReceived', { type: 'candidate-pair' });
      case 'firefox':
        return this._find('bytesReceived', { type: 'candidate-pair', selected: true });
      case 'safari':
        return this._find('bytesReceived', { type: 'candidate-pair' });
      default:
    }
    return -1;
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
    }
    return -1;
  }
  get totalRoundTripTime(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'safari':
        return this._find('totalRoundTripTime', { type: 'candidate-pair' });
      default:
    }
    return -1;
  }
}

// ============== todo - Legacy ================/

export class CandidatePairLegacyReports extends SimpleReports {
  // chrome - { type: googCandidatePair }
  bytesReceived: number;
  bytesSent: number;
  packetsSent: number;
  currentRoundTripTime: number; // googRtt - ms
}