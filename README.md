# Peerconnection getStats API

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
getStats(peerconnection)
  .then((originalReports: OriginalReports) => {
    const reports: AudioInputLegacyReports = new AudioInputLegacyReports(originalReports);
    console.log(reports.bytesReceived);
    ...
  })
  .catch(err => {
    ...
  });
```