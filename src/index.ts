// audio
class AudioInputReports {
  /**
   * chrome - { type: inbound-rtp, mediaType: audio }
   * firefox - { type: inbound-rtp, mediaType: audio }
   * safari - { type: inbound-rtp, mediaType: audio }
   */
  bytesReceived: number;

  /**
   * chrome - { type: inbound-rtp, mediaType: audio }
   * firefox - { type: inbound-rtp, mediaType: audio }
   * safari - { type: inbound-rtp, mediaType: audio }
   */
  packetsReceived: number;

  /**
   * chrome - { type: inbound-rtp, mediaType: audio }
   * firefox - { type: inbound-rtp, mediaType: audio }
   * safari - { type: inbound-rtp, mediaType: audio }
   */
  jitter: number;

  /**
   * chrome - { type: inbound-rtp, mediaType: audio }
   * firefox - { type: inbound-rtp, mediaType: audio }
   * safari - { type: inbound-rtp, mediaType: audio }
   */
  packetsLost: number;

  /**
   * chrome - { type: track, kind: audio }
   * safari - { type: track }
   */
  audioLevel: number;

  /**
   * chrome - { type: track, kind: audio }
   */
  totalAudioEnergy?: number;
}

class AudioOutputReports {
  /**
   * chrome - { type: outbound-rtp, mediaType: audio }
   * firefox - { type: outbound-rtp, mediaType: audio }
   * safari - { type: outbound-rtp, mediaType: audio }
   */
  bytesSent: number;

  /**
   * chrome - { type: outbound-rtp, mediaType: audio }
   * firefox - { type: outbound-rtp, mediaType: audio }
   * safari - { type: outbound-rtp, mediaType: audio }
   */
  packetsSent: number;

  /**
   * chrome - { type: remote-inbound-rtp, kind: audio }
   * firefox - { type: remote-inbound-rtp, kind: audio }
   */
  jitter: number;
  /**
   * chrome - { type: remote-inbound-rtp, kind: audio }
   * firefox - { type: remote-inbound-rtp, kind: audio }
   */
  packetsLost: number;
  /**
   * chrome - { type: remote-inbound-rtp, kind: audio }
   * firefox - { type: remote-inbound-rtp, kind: audio }
   */
  roundTripTime: number;

  /**
   * chrome - { type: media-source, kind: audio }
   */
  audioLevel?: number;

  /**
   * chrome - { type: media-source, kind: audio }
   */
  totalAudioEnergy?: number;
}


// video
class VideoInputReports {
  /**
   * chrome - { type: track, kind: video }
   * safari - { type: track }
   */
  frameWidth: number;

  /**
   * chrome - { type: track, kind: video }
   * safari - { type: track }
   */
  frameHeight: number;

  /**
   * chrome - { type: inbound-rtp, mediaType: video }
   * firefox - { type: inbound-rtp, mediaType: video }
   * safari - { type: inbound-rtp, mediaType: video }
   */
  bytesReceived: number;

  /**
   * chrome - { type: inbound-rtp, mediaType: video }
   * firefox - { type: inbound-rtp, mediaType: video }
   * safari - { type: inbound-rtp, mediaType: video }
   */
  packetsReceived: number;

  /**
   * chrome - { type: track, kind: video }
   * safari - { type: track }
   */
  framesReceived: number;

  /**
   * chrome - { type: track, kind: video }
   * firefox - { type: inbound-rtp, kind: video }
   * safari - { type: track }
   */
  framesDecoded: number;

  /**
   * chrome - { type: track, kind: video }
   * safari - { type: track }
   */
  framesDropped: number;

  /**
   * firefox - { type: inbound-rtp, kind: video }
   */
  jitter: number;

  /**
   * chrome - { type: inbound-rtp, kind: video }
   * firefox - { type: inbound-rtp, kind: video }
   * safari - { type: inbound-rtp, mediaType: video }
   */
  packetsLost: number;
}

class VideoOutputReports {
  /**
   * chrome - { type: track, kind: video }
   * safari - { type: track }
   */
  frameWidth: number;

  /**
   * chrome - { type: track, kind: video }
   * safari - { type: track }
   */
  frameHeight: number;

  /**
   * chrome - { type: outbound-rtp, mediaType: video }
   * firefox = { type: outbound-rtp, mediaType: video}
   * safari = { type: outbound-rtp, mediaType: video}
   */
  bytesSent: number;

  /**
   * chrome - { type: outbound-rtp, mediaType: video }
   * firefox = { type: outbound-rtp, mediaType: video}
   * safari = { type: outbound-rtp, mediaType: video}
   */
  packetsSent: number;

  /**
   * chrome - { type: remote-inbound-rtp, kind: video }
   * firefox - { type: remote-inbound-rtp, kind: video }
   */
  packetsLost: number;

  /**
   * chrome - { type: remote-inbound-rtp, kind: video }
   * firefox - { type: remote-inbound-rtp, kind: video }
   */
  jitter: number

  /**
   * chrome - { type: remote-inbound-rtp, kind: video }
   * firefox - { type: remote-inbound-rtp, kind: video }
   */
  roundTripTime: number

  /**
   * chrome - { type: track, kind: video }
   * safari - { type: track }
   */
  framesSent: number;

  /**
   * chrome - { type: outbound-rtp, mediaType: video }
   * firefox = { type: outbound-rtp, mediaType: video}
   * safari = { type: outbound-rtp, mediaType: video}
   */
  framesEncoded: number
}

// paire
class CandidatePairReports {
  /**
   * chrome - candidate-pair
   */
  bytesSent: number;

  /**
   * chrome - candidate-pair
   */
  bytesReceived: number;

  /**
   * chrome - candidate-pair (currentRoundTripTime)
   */
  currentRoundTripTime: number;
}

// ============ legacy =============
class RTCLegacyStatsReport {
  id: string;
  type: string;
}

class AudioOutputLegacyReports {
}