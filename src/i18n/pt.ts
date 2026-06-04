import { APP_VERSION } from '@lib'
import type { Strings } from './en'

export const pt: Strings = {
  nav: {
    logo:       'CUTPILOT SYNC',
    howItWorks: 'COMO FUNCIONA',
    features:   'FUNCIONALIDADES',
    download:   'DESCARREGAR',
  },
  hero: {
    badge:    'EDITOR DE VÍDEO COM IA',
    line1:    'CARREGA UM VÍDEO.',
    line2:    'RECEBE UM EDIT PERFEITO.',
    description: {
      before:      'O CutPilot Sync transcreve o teu vídeo palavra a palavra, depois usa',
      aiHighlight: 'IA',
      after:       'para remover automaticamente silêncios, retakes e palavras de preenchimento.',
      note:        'Sem edição de linha de tempo.',
    },
    downloadCta: 'DESCARREGAR',
    learnCta:    'COMO FUNCIONA',
    platforms:   ['WINDOWS', 'MACOS', 'LINUX', `v${APP_VERSION}`],
  },
  mockup: {
    titleBar:    'CutPilot Sync',
    filename:    'apresentacao_gravacao.mp4',
    ready:       'O TEU VÍDEO ESTÁ PRONTO',
    beforeLabel: 'ANTES',
    beforeTime:  '47:23',
    aiCutLabel:  'CORTE IA',
    afterLabel:  'DEPOIS',
    afterTime:   '28:15',
    cuts:        '15 cortes feitos',
    shorter:     '41% mais curto',
    openFolder:  'ABRIR PASTA',
    editAnother: 'EDITAR OUTRO',
  },
  howItWorks: {
    tag:      'O PROCESSO',
    title:    'COMO FUNCIONA',
    subtitle: 'Três passos do registo bruto ao vídeo pronto a publicar.',
    steps: [
      {
        number: '01',
        title:  'CARREGA O TEU VÍDEO',
        description:
          'Arrasta e solta o teu MP4, MOV, MKV, AVI ou WebM — mesmo gravações de muitas horas. Tens uma câmara secundária? Adiciona-a para manter ambos os ficheiros perfeitamente sincronizados.',
      },
      {
        number: '02',
        title:  'A IA TRATA DO RESTO',
        description:
          'A nossa IA transcreve cada palavra com carimbos de tempo precisos, depois identifica os melhores segmentos a manter — removendo automaticamente silêncios, retakes e palavras de preenchimento.',
      },
      {
        number: '03',
        title:  'EXPORTA E PUBLICA',
        description:
          'Um MP4 limpo e pronto a publicar é guardado na mesma pasta do teu original. Sem uploads para a cloud — todo o processamento corre localmente na tua máquina.',
      },
    ],
  },
  features: {
    tag:      'CAPACIDADES',
    title:    'TUDO O QUE PRECISAS',
    subtitle: 'Feito para criadores que valorizam o seu tempo — e a sua privacidade.',
    items: [
      {
        title: 'SINCRONIZAÇÃO DUPLA',
        description:
          'Edita o ecrã e a webcam em simultâneo. Ambos os ficheiros são cortados exatamente nos mesmos pontos — frame a frame, sempre.',
      },
      {
        title: 'EDIÇÃO COM IA',
        description:
          'A nossa IA lê a tua transcrição e cria uma lista de decisão de edição precisa. Retakes, pausas e palavras de preenchimento são removidos automaticamente.',
      },
      {
        title: 'MULTIPLATAFORMA',
        description:
          'Aplicações nativas para Windows, macOS e Linux. Instala uma vez, corre localmente para sempre',
      },
      {
        title: 'SÓ CRIAS UMA CONTA',
        description:
          'Regista-te e começa a editar de imediato. Sem configuração complexa — cria a tua conta e começa.',
      },
      {
        title: 'PRIVACIDADE EM PRIMEIRO',
        description:
          'Os teus vídeos são processados inteiramente na tua máquina. Nada é enviado para os nossos servidores — porque não temos nenhum.',
      },
      {
        title: 'FFMPEG-POWERED',
        description:
          'Processamento de vídeo profissional via FFmpeg. Suporta MP4, MOV, MKV, AVI e WebM. O resultado é um MP4 limpo com normalização de loudness.',
      },
    ],
  },
  download: {
    title:       'DESCARREGA O CUTPILOT SYNC',
    subtitle:    `v${APP_VERSION}`,
    recommended: '← RECOMENDADO PARA TI',
    note:        'Cria uma conta para começar. Instala a app, faz login e começa a editar.',
    platforms: {
      windows: { label: 'Windows', sublabel: 'Windows 10 / 11',        ext: '.exe installer'  },
      macos:   { label: 'macOS',   sublabel: 'macOS 12+',              ext: '.dmg image'      },
      linux:   { label: 'Linux',   sublabel: 'Ubuntu / Fedora / Arch', ext: 'AppImage · .deb' },
    },
    installGuide: {
      started:       'DOWNLOAD INICIADO',
      reason:        'A app ainda não tem certificado digital, o que pode gerar um aviso de segurança do sistema.',
      downloadAgain: '↓ Descarregar novamente',
      platforms: {
        windows: {
          warning: 'Se aparecer um aviso do SmartScreen:',
          steps: [
            'Clica "Mais informações" no aviso',
            'Clica "Executar mesmo assim"',
          ],
          command: '',
        },
        macos: {
          warning: 'Para instalar e abrir a app:',
          steps: [
            'Abre o .dmg e arrasta o CutPilot Sync para a pasta Applications',
            'Abre o Terminal (Applications → Utilities → Terminal)',
            'Corre o comando abaixo para remover o bloqueio do sistema:',
            'Abre a app normalmente',
          ],
          command: 'xattr -cr /Applications/CutPilot\\ Sync.app',
        },
        linux: {
          warning: 'Para executar o AppImage:',
          steps: [
            'Torna-o executável: chmod +x CutPilot-Sync-*.AppImage',
            'Executa: ./CutPilot-Sync-*.AppImage',
          ],
          command: '',
        },
      },
    },
  },
  footer: {
    logo:      'CUTPILOT SYNC',
    copyright: '© 2026 Simão Julião',
  },
}
