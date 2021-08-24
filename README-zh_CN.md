# Peerconnection getStats API

[![pipeline status](https://gitlab.com/poplark/peerconnection-stats/badges/master/pipeline.svg)](https://gitlab.com/poplark/peerconnection-stats/-/commits/master)
[![coverage report](https://gitlab.com/poplark/peerconnection-stats/badges/master/coverage.svg)](https://gitlab.com/poplark/peerconnection-stats/-/commits/master)

[English](./README.md) | 中文

获取 Peerconnection 的 `Standardized` 和 `Legacy Non-Standard` 报告并规范化输入的 getStats API。

## 示例

看更多 API 文档，请翻着 [DOCS](https://poplark.github.io/peerconnection-stats/)

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
