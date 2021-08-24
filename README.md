# Peerconnection getStats API

[![pipeline status](https://gitlab.com/poplark/peerconnection-stats/badges/master/pipeline.svg)](https://gitlab.com/poplark/peerconnection-stats/-/commits/master)
[![coverage report](https://gitlab.com/poplark/peerconnection-stats/badges/master/coverage.svg)](https://gitlab.com/poplark/peerconnection-stats/-/commits/master)

English | [中文](./README-zh_CN.md)

A getStats API of peerconnection with `Standardized` and `Legacy Non-Standard` reports, and it will normalized the output.

## Examples

For more APIs, see [DOCS](https://poplark.github.io/peerconnection-stats/)

### getStats

```ts
getStats(peerconnection)
  .then((originalReports: OriginalReports) => {
    const reports: AudioInputReports = new AudioInputReports(originalReports);
    console.log(reports.bytesReceived);
    ...
  })
  .catch(err => {
    ...
  });
```

### getLegacyStats

```ts
getLegacyStats(peerconnection)
  .then((originalReports: OriginalReports) => {
    const reports: AudioInputLegacyReports = new AudioInputLegacyReports(originalReports);
    console.log(reports.bytesReceived);
    ...
  })
  .catch(err => {
    ...
  });
```
