/* ============================================================
   i18n Data — An Li's Portfolio
   Languages: English (default), Japanese, Traditional Chinese
   ============================================================ */
window.I18N = {
  en: {
    meta: {
      title: "An Li",
      description: "QA Lead and Automation Engineer with 6+ years of experience across consumer electronics and SaaS (SalesMarker, Apple, Google)."
    },
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      writing: "Writing",
      contact: "Contact",
      menu: "Menu"
    },
    langSwitch: { label: "Language", en: "EN", ja: "JA", zh: "ZH" },
    hero: {
      greeting: "Hello There",
      name: "I'm An Li.",
      rolePrefix: "A ",
      roles: ["a SWT", "an Automation", "a Playwright"],
      roleSuffix: " engineer",
      from: "From Taiwan, based in Tokyo.",
      ctaProjects: "Latest Projects",
      ctaAbout: "More About Me",
      scroll: "Scroll Down"
    },
    about: {
      eyebrow: "About",
      title: "More About Me",
      summary: "Hey, I'm An. I've spent the past 6+ years chasing bugs and building automation — from Google Nest devices, to Apple's Siri evaluation, and now leading QA at a SaaS company in Tokyo. What I enjoy most is the puzzle of turning flaky manual tests into pipelines a team can actually trust, and lately, seeing how far LLM-driven agents can stretch what QA looks like. Off the clock, I'm usually knee-deep in board games or figuring out everyday life in a third language.",
      downloadCV: "Download My CV",
      hire: "Hire Me Now",
      skillsTitle: "Core Skills",
      skills: {
        automation: { label: "Automation (Deterministic)", value: "Playwright" },
        agentic: { label: "Agentic UI Automation (LLM-driven)", value: "Gemini Computer Use Preview, Browser Use" },
        cicd: { label: "CI/CD", value: "GitHub Actions, quality gates, pipeline design" },
        testing: { label: "Testing", value: "E2E, regression, functional validation, test strategy, test case management" },
        infra: { label: "Infra / Tools", value: "AWS EKS, K8s, Ansible, Splunk, Grafana, Docker" },
        languages: { label: "Languages", value: "TypeScript, Python, Java, Bash, SQL, Swift, YAML" }
      }
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          period: "Oct 2024 — Present",
          company: "SalesMarker",
          location: "Tokyo, Japan",
          role: "Lead Quality Assurance Engineer",
          stack: "Playwright · GitHub Actions · CI/CD · Test Strategy",
          bullets: [
            "Leading design and implementation of a robust end-to-end automation framework using Playwright, resulting in >80% growth in automation coverage.",
            "Collaborating with backend, frontend, and product teams to align testing strategies with release goals.",
            "Developing and maintaining CI pipeline architecture across multiple products, reducing deployment risk.",
            "Standardizing QA workflows and leading adoption of test case management strategies across distributed QA members.",
            "Architecting a ReportPortal-based test reporting platform on AWS EKS for data-driven stakeholder discussions.",
            "Prototyping LLM-driven agentic UI automation using Gemini Computer Use Preview and Browser Use."
          ]
        },
        {
          period: "Apr 2024 — Sep 2024",
          company: "Apple",
          location: "Yokohama, Japan",
          role: "Sr. Automation Engineer — AI/ML System Evaluation",
          stack: "Swift · Python3 · Xcode",
          bullets: [
            "Optimized and maintained the quality of Siri automated testing.",
            "Expanded Siri's automated test coverage on Apple products."
          ]
        },
        {
          period: "Sep 2022 — Apr 2024",
          company: "Apple",
          location: "Yokohama, Japan",
          role: "Automation Engineer — AI/ML Platform Technology",
          stack: "Lab admin · Ansible · K8s · Splunk · Python3",
          bullets: [
            "Maintained in-house automated configuration services (Docker, K8s, Ansible).",
            "Redesigned rack layout and power/network distribution; increased concurrent test capacity by 40%.",
            "Created data visualization tools to monitor log/infra with Splunk and Grafana.",
            "Collaborated with cross-functional teams on platform defects and provisioning errors."
          ]
        },
        {
          period: "Nov 2021 — Apr 2022",
          company: "Google (Parallel assignment)",
          location: "Taipei, Taiwan",
          role: "Quality Assurance Lead — Mediashell",
          stack: "Manual Test · Project Management",
          bullets: [
            "Led a team of 5 QAs to execute manual tests and built an environment to handle regression/retry issues.",
            "Designed Mediashell and SDK test plans on 4 different Nest devices; authored 2000+ test cases.",
            "Planned staff training for Multiroom testing.",
            "Coordinated resources and progress with PM/RD."
          ]
        },
        {
          period: "Nov 2020 — Apr 2022",
          company: "Google",
          location: "Taipei, Taiwan",
          role: "Sr. Software Testing Engineer — Chromecast",
          stack: "Automation · Shell Script · Java",
          bullets: [
            "Executed automated tests for Chromecast 3rd (Compatibility, GMS, Vendor suite).",
            "Maintained and built automated test environment in Google Laboratory.",
            "Developed automated test scripts with shell.",
            "Conducted manual testing for Multiroom, regression, remote, Assistant, and Talkback."
          ]
        },
        {
          period: "Apr 2020 — Nov 2020",
          company: "Google",
          location: "Taipei, Taiwan",
          role: "Software Testing Engineer — Thermostat",
          stack: "Manual Test · Shell Script",
          bullets: [
            "Executed sensor functional, performance, load, regression, stress, and sanity testing.",
            "Planned staff training for first off-line product test.",
            "Collaborated with teams across Mountain View, CA, and Bangalore, India."
          ]
        },
        {
          period: "Mar 2018 — Mar 2020",
          company: "Grandsys Tech",
          location: "Taipei, Taiwan",
          role: "Software Developer",
          stack: "Java · JS · JSP · SQL",
          bullets: [
            "Led design and implementation of website back-end architecture.",
            "Managed databases, data backup, and maintenance plans.",
            "Interfaced with clients to gather requirements and explain system processes.",
            "Engineered solutions for high-volume data transmission (100M+ transactions)."
          ]
        }
      ]
    },
    projects: {
      title: "Highlighted Projects",
      items: [
        { title: "E2E Automation Framework", desc: "Playwright + GitHub Actions CI quality gates; >80% automation coverage growth." },
        { title: "ReportPortal", desc: "Test reporting platform on AWS EKS integrated into CI for data-driven release decisions." },
        { title: "Agentic UI Automation PoC", desc: "LLM-driven exploratory flows using Gemini Computer Use Preview and Browser Use." },
        { title: "Apple AI/ML automation Lab Redesign", desc: "Rack/power/network redesign increased concurrent test capacity by 40%." },
        { title: "Google AndroidOS Test Design", desc: "Designed compatibility, GMS, and vendor-suite test plans across multiple Nest devices." },
        { title: "Google ChromeCast/Thermostat Test Design", desc: "Authored automated and manual test plans for Chromecast 3rd and Nest Thermostat." },
        { title: "Map Encyclopedia", desc: "Interactive map-based knowledge archive — a personal full-stack exploration project." },
        { title: "Citadels", desc: "Multiplayer board-game adaptation — game-logic engine and turn-based UX." },
        { title: "Personal Health Education Management System", desc: "Web platform for health curriculum tracking with back-end architecture and DB design." },
        { title: "CYCUEat", desc: "Campus food-ordering web app for Chung Yuan Christian University." }
      ]
    },
    writing: {
      title: "Writing",
      items: [
        { title: "When the test matrix has to cover the AI model", desc: "Golden datasets catch the regressions you can describe. The open problem is the failure you never wrote down, where metamorphic testing and adversarial red teaming come in.", date: "May 2026", url: "blog/test-matrix-meets-ai-product.html", image: "images/blog/cover-ai-scoring.png", cat: "AI Testing" }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Say Hello.",
      lead: "Open to opportunities, collaborations, and conversations about QA, automation, and AI-augmented testing.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
      sending: "Sending...",
      successMsg: "Your message was sent, thank you!",
      errorMsg: "Something went wrong. Please try again.",
      infoEmail: "Email",
      emailAddr: "hello@an-li.tw",
      infoLoc: "Location",
      locAddr: "Tokyo, Japan",
      infoPhone: "Phone"
    },
    footer: {
      rights: "All rights reserved",
      backToTop: "Back to Top"
    },
    notFound: {
      pageTitle: "404 — Page Not Found · An Li",
      message: "The page you&rsquo;re looking for doesn&rsquo;t exist, or something else went wrong. Head back to <a href=\"/\">an-li.tw</a>, or <a href=\"mailto:hello@an-li.tw\">contact me</a> if something should have been here.",
      cta: "Back to Home"
    }
  },

  ja: {
    meta: {
      title: "An Li",
      description: "SalesMarker、Apple、Googleで6年以上の経験を持つQAリード兼自動化エンジニア。"
    },
    nav: {
      home: "ホーム",
      about: "について",
      experience: "経歴",
      projects: "プロジェクト",
      writing: "ブログ",
      contact: "お問い合わせ",
      menu: "メニュー"
    },
    langSwitch: { label: "言語", en: "EN", ja: "JA", zh: "ZH" },
    hero: {
      greeting: "こんにちは",
      name: "アン・リーです。",
      rolePrefix: "",
      roles: ["ソフトウェアテスト", "自動化", "Playwright"],
      roleSuffix: "エンジニア",
      from: "台湾出身、東京在住。",
      ctaProjects: "最新プロジェクト",
      ctaAbout: "詳細を見る",
      scroll: "スクロール"
    },
    about: {
      eyebrow: "について",
      title: "私について",
      summary: "はじめまして、An です。この 6 年ちょっと、Google の Nest 機器から Apple の Siri 評価、そして今は東京の SaaS 企業で QA チームをリードしながら、ずっとバグ探しと自動化づくりを続けてきました。不安定な手動テストを、チームが安心して乗っかれるパイプラインに変えていく過程が一番好きで、最近は LLM 駆動のエージェントが QA をどこまで広げてくれるかを探っています。オフはボードゲームに夢中になったり、3 言語目の生活に少しずつ慣れていったり。",
      downloadCV: "履歴書をダウンロード",
      hire: "お仕事のご依頼",
      skillsTitle: "コアスキル",
      skills: {
        automation: { label: "自動化（決定論的）", value: "Playwright" },
        agentic: { label: "エージェンティックUI自動化（LLM駆動）", value: "Gemini Computer Use Preview、Browser Use" },
        cicd: { label: "CI/CD", value: "GitHub Actions、品質ゲート、パイプライン設計" },
        testing: { label: "テスト", value: "E2E、回帰、機能検証、テスト戦略、テストケース管理" },
        infra: { label: "インフラ/ツール", value: "AWS EKS、K8s、Ansible、Splunk、Grafana、Docker" },
        languages: { label: "言語", value: "TypeScript、Python、Java、Bash、SQL、Swift、YAML" }
      }
    },
    experience: {
      title: "職務経歴",
      items: [
        {
          period: "2024年10月 — 現在",
          company: "SalesMarker",
          location: "東京都",
          role: "リードQAエンジニア",
          stack: "Playwright · GitHub Actions · CI/CD · テスト戦略",
          bullets: [
            "Playwrightを使用した堅牢なE2E自動化フレームワークの設計と実装を主導し、自動化カバレッジを80%以上拡大。",
            "バックエンド、フロントエンド、プロダクトチームと連携し、テスト戦略をリリース目標に整合。",
            "複数プロダクトに対応するCIパイプラインアーキテクチャを開発・保守し、デプロイリスクを削減。",
            "QAワークフローを標準化し、分散QAメンバー間でテストケース管理戦略の導入を主導。",
            "AWS EKS上にReportPortalベースのテストレポートプラットフォームを構築。",
            "Gemini Computer Use PreviewとBrowser Useを用いたLLM駆動のエージェンティックUI自動化をプロトタイプ化。"
          ]
        },
        {
          period: "2024年4月 — 2024年9月",
          company: "Apple",
          location: "横浜市",
          role: "シニア自動化エンジニア — AI/MLシステム評価",
          stack: "Swift · Python3 · Xcode",
          bullets: [
            "Siri自動テストの品質を最適化・維持。",
            "Apple製品におけるSiriの自動テストカバレッジを拡大。"
          ]
        },
        {
          period: "2022年9月 — 2024年4月",
          company: "Apple",
          location: "横浜市",
          role: "自動化エンジニア — AI/MLプラットフォーム技術",
          stack: "ラボ管理 · Ansible · K8s · Splunk · Python3",
          bullets: [
            "社内自動化構成サービス（Docker、K8s、Ansible）を保守。",
            "ラックレイアウト・電源/ネットワーク分配を再設計し、並列テスト容量を40%増加。",
            "Splunk・Grafanaでログ/インフラ監視用のデータ可視化ツールを作成。",
            "クロスファンクショナルチームと協力し、プラットフォーム欠陥やプロビジョニングエラーに対応。"
          ]
        },
        {
          period: "2021年11月 — 2022年4月",
          company: "Google （並行任務）",
          location: "台北市",
          role: "QAリード — Mediashell",
          stack: "マニュアルテスト · プロジェクト管理",
          bullets: [
            "5名のQAチームを率いてマニュアルテストを実施、回帰/リトライ環境を構築。",
            "4種類のNestデバイス向けにMediashellとSDKテスト計画を設計、2000以上のテストケースを作成。",
            "Multiroomテストのためのスタッフトレーニングを計画。",
            "PM/RDとリソース・進捗を調整。"
          ]
        },
        {
          period: "2020年11月 — 2022年4月",
          company: "Google",
          location: "台北市",
          role: "シニアソフトウェアテストエンジニア — Chromecast",
          stack: "自動化 · シェル · Java",
          bullets: [
            "Chromecast 3rdの自動テスト（互換性、GMS、ベンダースイート）を実行。",
            "Google Laboratoryで自動テスト環境を保守・構築。",
            "シェルスクリプトで自動テストスクリプトを開発。",
            "Multiroom、回帰、リモート、Assistant、Talkbackのマニュアルテストを実施。"
          ]
        },
        {
          period: "2020年4月 — 2020年11月",
          company: "Google",
          location: "台北市",
          role: "ソフトウェアテストエンジニア — Thermostat",
          stack: "マニュアルテスト · シェル",
          bullets: [
            "センサー機能、パフォーマンス、負荷、回帰、ストレス、健全性テストを実施。",
            "初のオフライン製品テストのためのスタッフトレーニングを計画。",
            "Mountain View（米国）、Bangalore（インド）のチームと協力。"
          ]
        },
        {
          period: "2018年3月 — 2020年3月",
          company: "Grandsys Tech",
          location: "台北市",
          role: "ソフトウェア開発者",
          stack: "Java · JS · JSP · SQL",
          bullets: [
            "Webサイトバックエンドアーキテクチャの設計・実装を主導。",
            "データベース、データバックアップ、保守計画を管理。",
            "クライアントと要件を共有しシステムプロセスを説明。",
            "大量データ送信ソリューション（1億件以上）を設計。"
          ]
        }
      ]
    },
    projects: {
      title: "注目のプロジェクト",
      items: [
        { title: "E2E自動化フレームワーク", desc: "Playwright + GitHub Actions CI品質ゲートで自動化カバレッジ80%以上拡大。" },
        { title: "ReportPortal", desc: "AWS EKS上のテストレポート基盤。CIワークフローに統合しデータ駆動のリリース判断を支援。" },
        { title: "エージェンティックUI自動化PoC", desc: "Gemini Computer Use PreviewとBrowser Useを用いたLLM駆動の探索的フロー。" },
        { title: "Apple AI/ML自動化ラボ再設計", desc: "ラック/電源/ネットワーク再設計により並列テスト容量を40%増加。" },
        { title: "Google AndroidOSテスト設計", desc: "複数のNestデバイスに対して互換性・GMS・ベンダースイートのテスト計画を策定。" },
        { title: "Google Chromecast/Thermostatテスト設計", desc: "Chromecast 3rdおよびNest Thermostat向け自動化・手動テスト計画を作成。" },
        { title: "Map Encyclopedia", desc: "地図ベースのナレッジアーカイブ — 個人のフルスタック探求プロジェクト。" },
        { title: "Citadels", desc: "マルチプレイヤー対応ボードゲームの実装 — ゲームロジックとターン制UX設計。" },
        { title: "パーソナルヘルス教育管理システム", desc: "バックエンド設計とDB構築を伴う健康教育カリキュラム管理Webプラットフォーム。" },
        { title: "CYCUEat", desc: "中原大学向けのキャンパスフードオーダリングWebアプリ。" }
      ]
    },
    writing: {
      title: "ブログ",
      items: [
        { title: "テストマトリクスがAIモデルまで担うとき", desc: "ゴールデンデータセットは「想定済み」の回帰を捕まえる。本当の難題は想定外の失敗で、そこにメタモルフィックテストと敵対的レッドチームが入ってくる。", date: "2026年5月", url: "blog/test-matrix-meets-ai-product.html", image: "images/blog/cover-ai-scoring.png", cat: "AIテスト" }
      ]
    },
    contact: {
      eyebrow: "お問い合わせ",
      title: "お気軽にどうぞ。",
      lead: "QA、自動化、AI強化テストに関する機会、コラボレーション、会話を歓迎します。",
      name: "お名前",
      email: "メール",
      subject: "件名",
      message: "メッセージ",
      submit: "送信",
      sending: "送信中...",
      successMsg: "メッセージが送信されました。ありがとうございます！",
      errorMsg: "エラーが発生しました。もう一度お試しください。",
      infoEmail: "メール",
      emailAddr: "hello@an-li.tw",
      infoLoc: "所在地",
      locAddr: "東京、日本",
      infoPhone: "電話"
    },
    footer: {
      rights: "無断転載禁止",
      backToTop: "トップへ戻る"
    },
    notFound: {
      pageTitle: "404 — ページが見つかりません · An Li",
      message: "お探しのページは見つかりませんでした。<a href=\"/\">an-li.tw</a> に戻るか、本来あるはずのページが無い場合は <a href=\"mailto:hello@an-li.tw\">こちらまでご連絡</a> ください。",
      cta: "トップへ戻る"
    }
  },

  zh: {
    meta: {
      title: "An Li",
      description: "於 SalesMarker、Apple、Google 擁有 6+ 年經驗的 QA 主管與自動化工程師。"
    },
    nav: {
      home: "首頁",
      about: "關於",
      experience: "經歷",
      projects: "專案",
      writing: "文章",
      contact: "聯絡",
      menu: "選單"
    },
    langSwitch: { label: "語言", en: "EN", ja: "JA", zh: "ZH" },
    hero: {
      greeting: "你好",
      name: "我是李安。",
      rolePrefix: "",
      roles: ["軟體測試", "自動化", "Playwright"],
      roleSuffix: "工程師",
      from: "來自台灣，目前位於東京。",
      ctaProjects: "最新專案",
      ctaAbout: "關於我",
      scroll: "向下滑動"
    },
    about: {
      eyebrow: "關於",
      title: "關於我",
      summary: "嗨，我是李安。過去 6 年多的時間，我從 Google 的 Nest 裝置、Apple 的 Siri 評估團隊一路走到東京的 SaaS 公司，現在帶著團隊把一個個 bug 轉成能被信賴的自動化流程。最喜歡的，就是把搖搖欲墜的手動測試整理成可以安心 ship 的 CI pipeline；最近則在研究 LLM agent 能把 QA 的邊界往哪裡推。下班以後通常會埋在桌遊、東京小旅行，或努力適應第三種語言的日常生活裡。",
      downloadCV: "下載履歷",
      hire: "立即聘用",
      skillsTitle: "核心技能",
      skills: {
        automation: { label: "自動化（確定性）", value: "Playwright" },
        agentic: { label: "代理型 UI 自動化（LLM 驅動）", value: "Gemini Computer Use Preview、Browser Use" },
        cicd: { label: "CI/CD", value: "GitHub Actions、品質閘道、流水線設計" },
        testing: { label: "測試", value: "E2E、迴歸、功能驗證、測試策略、測試案例管理" },
        infra: { label: "基礎建設 / 工具", value: "AWS EKS、K8s、Ansible、Splunk、Grafana、Docker" },
        languages: { label: "語言", value: "TypeScript、Python、Java、Bash、SQL、Swift、YAML" }
      }
    },
    experience: {
      title: "工作經歷",
      items: [
        {
          period: "2024 年 10 月 — 至今",
          company: "SalesMarker",
          location: "日本東京",
          role: "QA 主管工程師",
          stack: "Playwright · GitHub Actions · CI/CD · 測試策略",
          bullets: [
            "主導設計與實作以 Playwright 為基礎的穩健 E2E 自動化框架，使關鍵產品自動化覆蓋率成長 80% 以上。",
            "與後端、前端、產品團隊緊密合作，對齊測試策略與發布目標。",
            "開發並維護跨多專案的 CI 流水線架構，降低部署風險。",
            "標準化 QA 流程、推動測試案例管理策略，提升追溯性與跨地 QA 團隊協作效率。",
            "在 AWS EKS 上建置整合 ReportPortal 的測試報告平台，支援資料驅動的利害關係人討論。",
            "以 Gemini Computer Use Preview 與 Browser Use 原型 LLM 驅動的代理 UI 自動化。"
          ]
        },
        {
          period: "2024 年 4 月 — 2024 年 9 月",
          company: "Apple",
          location: "日本橫濱",
          role: "資深自動化工程師 — AI/ML 系統評估",
          stack: "Swift · Python3 · Xcode",
          bullets: [
            "最佳化並維持 Siri 自動化測試品質。",
            "擴展 Apple 產品上 Siri 的自動化測試覆蓋率。"
          ]
        },
        {
          period: "2022 年 9 月 — 2024 年 4 月",
          company: "Apple",
          location: "日本橫濱",
          role: "自動化工程師 — AI/ML 平台技術",
          stack: "Lab 管理 · Ansible · K8s · Splunk · Python3",
          bullets: [
            "維運內部自動化組態服務（Docker、K8s、Ansible）。",
            "重新設計機櫃配置與電力/網路分配，並行測試容量提升 40%。",
            "以 Splunk 與 Grafana 建立日誌與基礎設施監控的資料視覺化工具。",
            "與跨職能團隊合作排除平台缺陷與配置錯誤。"
          ]
        },
        {
          period: "2021 年 11 月 — 2022 年 4 月",
          company: "Google （並行任務）",
          location: "台灣台北",
          role: "QA 主管 — Mediashell",
          stack: "手動測試 · 專案管理",
          bullets: [
            "率領 5 人 QA 團隊執行手動測試，建立迴歸/重試環境。",
            "為 4 款 Nest 裝置設計 Mediashell 與 SDK 測試計畫，撰寫 2000+ 測試案例。",
            "規劃 Multiroom 測試的人員訓練。",
            "與 PM/RD 協調人力與專案進度。"
          ]
        },
        {
          period: "2020 年 11 月 — 2022 年 4 月",
          company: "Google",
          location: "台灣台北",
          role: "資深軟體測試工程師 — Chromecast",
          stack: "自動化 · Shell · Java",
          bullets: [
            "執行 Chromecast 3rd 的自動化測試（相容性、GMS、Vendor suite）。",
            "於 Google Laboratory 維運與建置自動化測試環境。",
            "以 shell script 開發自動化測試腳本。",
            "執行 Multiroom、迴歸、遙控、Assistant、Talkback 手動測試。"
          ]
        },
        {
          period: "2020 年 4 月 — 2020 年 11 月",
          company: "Google",
          location: "台灣台北",
          role: "軟體測試工程師 — Thermostat",
          stack: "手動測試 · Shell",
          bullets: [
            "執行感測器功能、效能、負載、迴歸、壓力、健檢測試。",
            "規劃第一輪離線測試的人員訓練。",
            "與加州 Mountain View 及印度 Bangalore 團隊合作。"
          ]
        },
        {
          period: "2018 年 3 月 — 2020 年 3 月",
          company: "鈞晟科技",
          location: "台灣台北",
          role: "軟體開發工程師",
          stack: "Java · JS · JSP · SQL",
          bullets: [
            "主導網站後端架構設計與實作。",
            "規劃資料庫、備份與維護計畫。",
            "與客戶溝通需求並說明系統流程。",
            "設計上億筆資料傳輸方案。"
          ]
        }
      ]
    },
    projects: {
      title: "精選專案",
      items: [
        { title: "E2E 自動化框架", desc: "以 Playwright + GitHub Actions CI 品質閘道達成自動化覆蓋率 80% 以上成長。" },
        { title: "ReportPortal", desc: "建置於 AWS EKS 的測試報告平台，整合 CI 工作流以支援資料驅動發布決策。" },
        { title: "代理 UI 自動化 PoC", desc: "以 Gemini Computer Use Preview 與 Browser Use 建構 LLM 驅動的探索流程。" },
        { title: "Apple AI/ML 自動化實驗室重新設計", desc: "機櫃/電力/網路重新設計，並行測試容量增加 40%。" },
        { title: "Google AndroidOS 測試設計", desc: "為多款 Nest 裝置撰寫相容性、GMS 與 Vendor suite 測試計畫。" },
        { title: "Google ChromeCast/Thermostat 測試設計", desc: "為 Chromecast 3rd 與 Nest Thermostat 設計自動化與手動測試計畫。" },
        { title: "Map Encyclopedia", desc: "以地圖為核心的知識典藏，個人全端探索專案。" },
        { title: "Citadels", desc: "多人桌遊線上化 — 遊戲邏輯與回合制 UX 設計。" },
        { title: "個人健康教育管理系統", desc: "涵蓋後端架構與資料庫設計的健康教育課程管理 Web 平台。" },
        { title: "CYCUEat", desc: "中原大學校園訂餐 Web 應用。" }
      ]
    },
    writing: {
      title: "文章",
      items: [
        { title: "當 test matrix 必須涵蓋 AI 模型", desc: "Golden dataset 抓得到你描述得出的 regression，真正難的是你壓根沒寫下來的那種失敗，而這正是 metamorphic testing 與對抗式紅隊登場的地方。", date: "2026 年 5 月", url: "blog/test-matrix-meets-ai-product.html", image: "images/blog/cover-ai-scoring.png", cat: "AI 測試" }
      ]
    },
    contact: {
      eyebrow: "聯絡",
      title: "歡迎聯繫。",
      lead: "歡迎討論 QA、自動化與 AI 增強測試的工作機會、合作與交流。",
      name: "姓名",
      email: "電子郵件",
      subject: "主旨",
      message: "訊息",
      submit: "送出訊息",
      sending: "傳送中...",
      successMsg: "您的訊息已送出，感謝！",
      errorMsg: "發生錯誤，請再試一次。",
      infoEmail: "電子郵件",
      emailAddr: "hello@an-li.tw",
      infoLoc: "所在地",
      locAddr: "日本東京",
      infoPhone: "電話"
    },
    footer: {
      rights: "版權所有",
      backToTop: "回到頂端"
    },
    notFound: {
      pageTitle: "404 — 找不到頁面 · An Li",
      message: "你要找的頁面不存在，或者發生了其他錯誤。請回到 <a href=\"/\">an-li.tw</a>，如果這裡原本該有內容，歡迎 <a href=\"mailto:hello@an-li.tw\">聯絡我</a>。",
      cta: "回到首頁"
    }
  }
};

/* ============================================================
   i18n runtime — apply translations to any element with data-i18n
   ============================================================ */
window.I18nRuntime = (function () {
  const SUPPORTED = ["en", "ja", "zh"];
  const STORAGE_KEY = "anli.lang";

  function resolve(path, dict) {
    return path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), dict);
  }

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    return "en"; // default English
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = "en";
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
  }

  function apply(lang) {
    const dict = window.I18N[lang] || window.I18N.en;
    document.documentElement.lang = lang;

    // Update document title
    const titleEl = document.querySelector("title");
    if (titleEl) titleEl.textContent = resolve("meta.title", dict);
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", resolve("meta.description", dict));

    // Apply to all [data-i18n] elements
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = resolve(key, dict);
      if (typeof val === "string") el.textContent = val;
    });

    // Apply placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = resolve(key, dict);
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });

    // Apply aria-labels
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const val = resolve(key, dict);
      if (typeof val === "string") el.setAttribute("aria-label", val);
    });

    // Update active state on language switcher buttons
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang-btn") === lang);
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang-btn") === lang);
    });

    // Fire event for custom renderers (dynamic content like experience list)
    window.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang, dict } }));
  }

  function init() {
    const lang = getLang();
    apply(lang);

    // Bind language switcher buttons
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        setLang(btn.getAttribute("data-lang-btn"));
      });
    });

    // Sync language across pages via storage events (terminal <-> classic).
    window.addEventListener("storage", (e) => {
      if (e.key === STORAGE_KEY && e.newValue && SUPPORTED.includes(e.newValue) && e.newValue !== getLang()) {
        apply(e.newValue);
      }
    });
  }

  return { init, setLang, getLang, apply, SUPPORTED };
})();

// Auto-init on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => window.I18nRuntime.init());
} else {
  window.I18nRuntime.init();
}
