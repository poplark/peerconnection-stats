// audio
class AudioInputReports {
  /**
   * chrome - inbound-rtp
   * firefox - inbound-rtp
   * safari - inbound-rtp
   */
  bytesReceived: number;

  /**
   * chrome - inbound-rtp
   * firefox - inbound-rtp
   * safari - inbound-rtp
   */
  packetsReceived: number;

  /**
   * chrome - inbound-rtp
   * firefox - inbound-rtp
   * safari - inbound-rtp
   */
  jitter: number;

  /**
   * chrome - inbound-rtp
   * firefox - inbound-rtp
   * safari - inbound-rtp
   */
  packetsLost: number;

  /**
   * chrome - track
   * safari - track
   */
  audioLevel?: number;

  /**
   * chrome - track
   */
  totalAudioEnergy?: number;

  /**
   * firefox - remote-outbound-rtp
   * safari - outbound-rtp
   */
  bytesSent?: number;

  /**
   * firefox - remote-outbound-rtp
   * safari - outbound-rtp
   */
  packetsSent?: number;
}

class AudioOutputReports {
  /**
   * chrome - outbound-rtp
   * firefox - outbound-rtp
   * safari - outbound-rtp
   */
  bytesSent: number;

  /**
   * chrome - outbound-rtp
   * firefox - outbound-rtp
   * safari - outbound-rtp
   */
  packetsSent: number;

  /**
   * chrome - remote-inbound-rtp
   * firefox - remote-inbound-rtp
   */
  jitter?: number;
  /**
   * chrome - remote-inbound-rtp
   * firefox - remote-inbound-rtp
   */
  packetsLost?: number;
  /**
   * chrome - remote-inbound-rtp
   * firefox - remote-inbound-rtp
   */
  roundTripTime?: number;

  /**
   * chrome - media-source 
   */
  audioLevel?: number;

  /**
   * chrome - media-source 
   */
  totalAudioEnergy?: number;

  /**
   * firefox - remote-inbound-rtp
   */
  bytesReceived?: number;

  /**
   * firefox - remote-inbound-rtp
   */
  packetsReceived?: number;
}


// video

class VideoInputReports {
}

class VideoOutputReports {
}
