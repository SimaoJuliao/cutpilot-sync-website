import { APP_VERSION } from '@lib'

type DeepString<T> =
  T extends string
    ? string
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepString<U>>
    : { readonly [K in keyof T]: DeepString<T[K]> }

export const en = {
  nav: {
    logo:       'CUTPILOT SYNC',
    howItWorks: 'HOW IT WORKS',
    features:   'FEATURES',
    download:   'DOWNLOAD',
  },
  hero: {
    badge:    'AI-POWERED VIDEO EDITOR',
    line1:    'DROP A VIDEO.',
    line2:    'GET A PERFECT EDIT.',
    description: {
      before:      'CutPilot Sync transcribes your video word-by-word, then uses',
      aiHighlight: 'AI',
      after:       'to automatically remove dead air, retakes, and filler words.',
      note:        'No timeline editing required.',
    },
    downloadCta: 'DOWNLOAD',
    learnCta:    'HOW IT WORKS',
    platforms:   ['WINDOWS', 'MACOS', 'LINUX', `v${APP_VERSION}`] as const,
  },
  mockup: {
    titleBar:    'CutPilot Sync',
    filename:    'presentation_recording.mp4',
    ready:       'YOUR VIDEO IS READY',
    beforeLabel: 'BEFORE',
    beforeTime:  '47:23',
    aiCutLabel:  'AI CUT',
    afterLabel:  'AFTER',
    afterTime:   '28:15',
    cuts:        '15 cuts made',
    shorter:     '41% shorter',
    openFolder:  'OPEN FOLDER',
    editAnother: 'EDIT ANOTHER',
  },
  howItWorks: {
    tag:      'THE PROCESS',
    title:    'HOW IT WORKS',
    subtitle: 'Three steps from raw recording to publish-ready video.',
    steps: [
      {
        number: '01',
        title:  'DROP YOUR VIDEO',
        description:
          'Drag and drop your MP4, MOV, MKV, AVI, or WebM — even multi-hour recordings. Got a webcam feed? Add it to keep both files perfectly in sync.',
      },
      {
        number: '02',
        title:  'AI CLEANS IT UP',
        description:
          'Our AI transcribes every word with precise timestamps, then identifies the best segments to keep — automatically removing dead air, retakes, and filler words.',
      },
      {
        number: '03',
        title:  'EXPORT AND PUBLISH',
        description:
          'A clean, publish-ready MP4 is saved in the same folder as your original. No cloud uploads — all processing runs locally on your machine.',
      },
    ] as const,
  },
  features: {
    tag:      'CAPABILITIES',
    title:    'EVERYTHING YOU NEED',
    subtitle: 'Built for creators who value their time — and their privacy.',
    items: [
      {
        title: 'DUAL-VIDEO SYNC',
        description:
          'Edit your screen recording and webcam simultaneously. Both files are cut at the exact same points — frame-perfect, every time.',
      },
      {
        title: 'AI-POWERED EDITING',
        description:
          'Our AI reads your transcript and creates a precise edit decision list. Retakes, pauses, and filler words are removed automatically.',
      },
      {
        title: 'MULTI-PLATFORM',
        description:
          'Native desktop apps for Windows, macOS, and Linux. Install once, runs locally forever — no monthly fees, no subscription.',
      },
      {
        title: 'JUST CREATE AN ACCOUNT',
        description:
          'Sign up and start editing right away. No complex configuration — just create your account and go.',
      },
      {
        title: 'PRIVACY FIRST',
        description:
          "Your videos are processed entirely on your machine. Nothing is uploaded to our servers — because we don't have any.",
      },
      {
        title: 'FFMPEG-POWERED',
        description:
          'Professional-grade video processing via FFmpeg. Supports MP4, MOV, MKV, AVI, and WebM. Output is a clean, loudness-normalized MP4.',
      },
    ] as const,
  },
  download: {
    title:       'DOWNLOAD CUTPILOT SYNC',
    subtitle:    `v${APP_VERSION}`,
    recommended: '← RECOMMENDED FOR YOU',
    note:        'Create an account to get started. Install the app, sign in, and start editing.',
    platforms: {
      windows: { label: 'Windows', sublabel: 'Windows 10 / 11',        ext: '.exe installer'  },
      macos:   { label: 'macOS',   sublabel: 'macOS 12+',              ext: '.dmg image'      },
      linux:   { label: 'Linux',   sublabel: 'Ubuntu / Fedora / Arch', ext: 'AppImage · .deb' },
    },
  },
  footer: {
    logo:      'CUTPILOT SYNC',
    copyright: '© 2026 Simão Julião',
  },
} as const

export type Strings = DeepString<typeof en>
