# Hole Games — Hosting Repo

CDN: `https://cdn.jsdelivr.net/gh/kuru-bana/Games@main` / fallback: `https://raw.githubusercontent.com/kuru-bana/Games/main`

## ゲーム一覧

| ゲーム | タイプ | サイズ |
|--------|--------|--------|
| Hole.io | Unity (old UnityLoader style) | ~13 MB |

## フォルダ構成

```
Hole/
└── hole.io/
    ├── UnityLoader.js              (152 KB)
    ├── UnityProgress.js            (1.2 KB)
    ├── hole.json                   (468 B)  — config (paths overridden via Blob URL)
    ├── vaxo.data.unityweb          (7.6 MB)
    ├── vaxoio.asm.code.unityweb    (4.7 MB)
    ├── vaxoio.asm.memory.unityweb  (367 KB)
    └── vaxoio.asm.framework.unityweb (412 KB)
```

## 注意

`hole.json` のパスは HTML 側で Blob URL に差し替えてCDNベースURLを動的に注入しています。
