export type VideoItem = {
  title: string;
  category: string;
  duration: string;
  id: string;
  color: string;
  art: 'orbit' | 'bars' | 'wave' | 'grid';
};

export type VisualType =
  | 'freq-table'
  | 'histogram-poly'
  | 'central-table'
  | 'dispersion-table'
  | 'regression-chart'
  | 'prob-table'
  | 'va-discrete-table'
  | 'binomial-chart'
  | 'poisson-chart'
  | 'normal-chart';

export type AreaItem = {
  name: string;
  icon: string;
  text: string;
  formula: string;
  detail: string;
  example: string;
  result: string;
  color: string;
  visual?: VisualType;
};

export type MapFormulaDetail = {
  topic: string;
  formula: string;
  explanation: string;
  example: string;
};

export type MapBranch = {
  label: string;
  formula?: string;
  subBranches: string[];
};

export type MapItem = {
  name: string;
  tag: string;
  center: string;
  subCenter: string;
  branches: MapBranch[];
  color: string;
  summary: string;
  items: MapFormulaDetail[];
};
export type Overlay = { kind: 'video' | 'area' | 'map'; index: number } | null;

export const videos: VideoItem[] = [
  {
    title: 'Estatística Descritiva: Tabelas e Gráficos',
    category: 'ESSENCIAIS DE ESTATÍSTICA',
    duration: '26:49',
    id: 'jOIMYTVSJuM',
    color: '#cbef87',
    art: 'bars',
  },
  {
    title: 'Distribuição Binomial de Probabilidade',
    category: 'MODELOS DISCRETOS',
    duration: '26:04',
    id: 'XdPFH_pEmTo',
    color: '#b4a0e8',
    art: 'orbit',
  },
  {
    title: 'Distribuição Normal de Probabilidades',
    category: 'PENSE VISUALMENTE',
    duration: '9:23',
    id: 'CcIhlbN1U9Q',
    color: '#efb38b',
    art: 'wave',
  },
  {
    title: 'Correlação e Regressão Linear (UNIVESP)',
    category: 'CONSTRUA SUA BASE',
    duration: '14:32',
    id: 'uF78_zMorHU',
    color: '#92c9dc',
    art: 'grid',
  },
];

export const areas: AreaItem[] = [
  {
    name: 'Sturges e Intervalo de Classes',
    icon: 'k',
    text: 'Defina o número ideal de classes e a amplitude para agrupar dados brutos.',
    formula: 'k = 1 + 3,322 · log₁₀(n)   |   h = AT / k',
    detail:
      'A Fórmula de Sturges determina a quantidade ideal de classes (k) com base no total de observações (n). Em seguida, divide-se a Amplitude Total (AT = Xmáx − Xmín) por k para obter a amplitude de cada intervalo de classe (h).',
    example: 'Exemplo: n = 40 dados, Xmín = 10, Xmáx = 58 (AT = 48)',
    result: 'k = 1 + 3,322 · log₁₀(40) ≈ 6,32 → 6 classes   |   h = 48 / 6 = 8',
    color: '#c8ec91',
    visual: 'freq-table',
  },
  {
    name: 'Distribuição de Frequência',
    icon: 'fi',
    text: 'Organize dados em classes com frequências absoluta, relativa e acumulada.',
    formula: 'frᵢ = fᵢ / n   |   Fᵢ = ∑ fⱼ   |   xᵢ = (Lᵢ + lᵢ) / 2',
    detail:
      'A tabela de distribuição de frequência resume grandes conjuntos de dados em intervalos de classe, mostrando a contagem simples (fᵢ), a proporção percentual (frᵢ), o acumulado (Fᵢ) e o ponto médio (xᵢ) de cada classe.',
    example: 'Exemplo: Classe [18 ⊢ 26) com fᵢ = 10 em um total n = 40',
    result: 'frᵢ = 10 / 40 = 0,25 (25%)   |   Ponto Médio xᵢ = (18 + 26) / 2 = 22',
    color: '#baa8ec',
    visual: 'freq-table',
  },
  {
    name: 'Histograma e Polígono',
    icon: '📊',
    text: 'Representação gráfica contígua das classes e da curva de tendência.',
    formula: 'Base = Amplitude (h)   |   Altura = fᵢ   |   Vértice = (xᵢ, fᵢ)',
    detail:
      'O Histograma exibe retângulos justapostos (sem espaços) onde a base é o intervalo de classe e a altura é a frequência. O Polígono de Frequência liga os pontos médios (xᵢ) do topo de cada barra, fechando nas extremidades.',
    example: 'Construção visual para 5 classes de notas (n = 40 alunos)',
    result: 'Área total do histograma = n (ou 100% na frequência relativa)',
    color: '#e9b58f',
    visual: 'histogram-poly',
  },
  {
    name: 'Média e Tendência Central',
    icon: 'x̄',
    text: 'Média aritmética simples, ponderada, mediana e moda dos dados.',
    formula: 'x̄ = ∑xᵢ / n   |   x̄ₚ = ∑(xᵢ · pᵢ) / ∑pᵢ',
    detail:
      'Medidas de tendência central indicam o valor típico de um conjunto. A Média Ponderada atribui pesos (pᵢ) diferentes a cada valor (ou usa as frequências fᵢ em dados agrupados). A Mediana (Md) divide os dados ordenados ao meio e a Moda (Mo) é o valor mais frequente.',
    example: 'Exemplo Ponderado: Notas 7 (peso 2), 8 (peso 3) e 9 (peso 5)',
    result: 'x̄ₚ = (7·2 + 8·3 + 9·5) / (2 + 3 + 5) = 83 / 10 = 8,3',
    color: '#9bcbd8',
    visual: 'central-table',
  },
  {
    name: 'Variância, Desvio Padrão e CV',
    icon: 'σ / CV',
    text: 'Meça o grau de espalhamento e a dispersão relativa dos dados.',
    formula: 's² = ∑(xᵢ − x̄)² / (n − 1)   |   s = √s²   |   CV = (s / x̄) · 100%',
    detail:
      'A Variância (s² amostral, σ² populacional) mede o afastamento quadrático médio em relação à média. O Desvio Padrão (s) traz o resultado para a mesma unidade dos dados. O Coeficiente de Variação (CV) compara dispersões em porcentagem (CV < 15% = baixa dispersão).',
    example: 'Exemplo: Dados {4, 6, 8, 10} → Média x̄ = 7',
    result: 's² = [(−3)² + (−1)² + 1² + 3²] / 3 = 20/3 ≈ 6,67   |   s ≈ 2,58   |   CV ≈ 36,9%',
    color: '#e7b5c6',
    visual: 'dispersion-table',
  },
  {
    name: 'Correlação (r) e Regressão Linear',
    icon: 'r / ŷ',
    text: 'Avalie a força da relação linear entre X e Y e faça previsões com a reta.',
    formula: 'r = Sₓᵧ / √(Sₓₓ · Sᵧᵧ)   |   ŷ = a + b·x',
    detail:
      'O Coeficiente de Pearson (r) varia de −1 a +1 e mede a intensidade e direção da relação linear. A Regressão Linear Simples encontra a melhor reta (ŷ = a + b·x), onde b = Sₓᵧ / Sₓₓ é a inclinação e a = ȳ − b·x̄ é o intercepto.',
    example: 'Exemplo: Horas de estudo (x) vs. Nota (y) com r = 0,94',
    result: 'b = Sₓᵧ / Sₓₓ   |   a = ȳ − b·x̄   |   R² = r² (Coef. de Determinação)',
    color: '#c8ec91',
    visual: 'regression-chart',
  },
  {
    name: 'Experimento Aleatório e Probabilidade',
    icon: 'P(A)',
    text: 'Espaço amostral, eventos, probabilidade condicional e independência.',
    formula: 'P(A|B) = P(A ∩ B) / P(B)   |   P(A ∩ B) = P(A) · P(B)',
    detail:
      'Um experimento aleatório produz resultados imprevisíveis dentro de um Espaço Amostral (Ω). A Probabilidade Condicional P(A|B) recalcula a chance de A sabendo que B já ocorreu. Se A e B são eventos independentes, P(A|B) = P(A) e P(A ∩ B) = P(A)·P(B).',
    example: 'Exemplo: Baralho (52 cartas) — P(Ás | Carta Vermelha)',
    result: 'P(Ás ∩ Vermelha) = 2/52   |   P(Vermelha) = 26/52   →   P(Ás|Vermelha) = 2/26 = 1/13',
    color: '#baa8ec',
    visual: 'prob-table',
  },
  {
    name: 'Variável Aleatória Discreta, E(X) e Var(X)',
    icon: 'E(X)',
    text: 'Distribuição de probabilidades para contagens, valor esperado e variância.',
    formula: '∑ P(X = xᵢ) = 1   |   E(X) = ∑ xᵢ·P(xᵢ)   |   Var(X) = E(X²) − [E(X)]²',
    detail:
      'Uma Variável Aleatória Discreta assume valores enumeráveis (0, 1, 2...). A Esperança E(X) representa a média teórica ponderada pelas probabilidades, enquanto Var(X) mede a variabilidade em torno de E(X).',
    example: 'Exemplo: X = nº de caras em 2 moedas → P(0)=0,25; P(1)=0,50; P(2)=0,25',
    result: 'E(X) = 0(0,25) + 1(0,50) + 2(0,25) = 1,0   |   Var(X) = 1,5 − 1² = 0,5',
    color: '#e9b58f',
    visual: 'va-discrete-table',
  },
  {
    name: 'Distribuição Binomial e Combinatória',
    icon: 'B(n,p)',
    text: 'Probabilidade de k sucessos em n ensaios independentes de Bernoulli.',
    formula: 'P(X = k) = C(n,k) · pᵏ · (1 − p)ⁿ⁻ᵏ   |   C(n,k) = n! / [k!(n − k)!]',
    detail:
      'Modela o número de sucessos (k) em n tentativas idênticas e independentes, cada uma com probabilidade fixa de sucesso (p) e fracasso (q = 1 − p). A combinação C(n,k) conta de quantas formas os k sucessos podem ocorrer.',
    example: 'Exemplo: 4 lançamentos de moeda (n=4, p=0,5), chance de k=2 caras',
    result: 'P(X = 2) = C(4,2) · (0,5)² · (0,5)² = 6 · 0,0625 = 0,375 (37,5%)   |   E(X) = n·p = 2',
    color: '#9bcbd8',
    visual: 'binomial-chart',
  },
  {
    name: 'Distribuição de Poisson (Euler)',
    icon: 'e⁻ᵏ',
    text: 'Eventos raros em um intervalo contínuo usando o número de Euler (e).',
    formula: 'P(X = k) = (e⁻ᵏ · λᵏ) / k!   |   E(X) = λ   |   Var(X) = λ',
    detail:
      'Calcula a probabilidade de ocorrerem k eventos em um intervalo fixo de tempo, área ou volume, sabendo a taxa média de ocorrência (λ). Utiliza a constante de Euler (e ≈ 2,71828). Na Poisson, a média e a variância são iguais a λ.',
    example: 'Exemplo: Média de λ = 3 chamadas/min. Qual a chance de k = 2 chamadas?',
    result: 'P(X = 2) = (e⁻³ · 3²) / 2! = (0,04979 · 9) / 2 ≈ 0,2240 (22,4%)',
    color: '#e7b5c6',
    visual: 'poisson-chart',
  },
  {
    name: 'Variável Contínua e Distribuição Normal',
    icon: 'N(μ,σ²)',
    text: 'Densidade de probabilidade, curva de Gauss e padronização Escore-Z.',
    formula: 'Z = (X − μ) / σ   |   P(a ≤ X ≤ b) = ∫ f(x) dx   |   Área Total = 1',
    detail:
      'Uma Variável Aleatória Contínua assume qualquer valor real em um intervalo (peso, altura, tempo), onde probabilidades são áreas sob a curva f(x) e P(X = x) = 0. A Distribuição Normal é simétrica em torno da média μ; o Escore-Z converte qualquer Normal para a Normal Padrão N(0, 1).',
    example: 'Exemplo: Altura com μ = 170 cm e σ = 10 cm. Escore-Z para X = 185 cm',
    result: 'Z = (185 − 170) / 10 = +1,50   (68% em ±1σ, 95% em ±2σ, 99,7% em ±3σ)',
    color: '#c8ec91',
    visual: 'normal-chart',
  },
];

export const maps: MapItem[] = [
  {
    name: 'Organização de Dados e Frequências',
    tag: 'MAPA 01 · ESTATÍSTICA DESCRITIVA',
    center: 'Frequências',
    subCenter: 'Dados Brutos → Tabela',
    color: '#c8ec91',
    summary: 'Fluxo completo desde a contagem de dados brutos até a construção do histograma e polígono.',
    branches: [
      {
        label: 'Sturges & Classes',
        formula: 'k = 1 + 3,322·log(n)',
        subBranches: ['Amplitude AT = Xmáx − Xmín', 'Intervalo h = AT / k'],
      },
      {
        label: 'Tabela de Freq.',
        formula: 'frᵢ = fᵢ / n',
        subBranches: ['Absoluta (fᵢ) e Acum. (Fᵢ)', 'Ponto Médio xᵢ = (Lᵢ+lᵢ)/2'],
      },
      {
        label: 'Histograma',
        formula: 'Base = h | Altura = fᵢ',
        subBranches: ['Barras sem espaço', 'Área = Total de dados'],
      },
      {
        label: 'Polígono Freq.',
        formula: 'Vértices (xᵢ, fᵢ)',
        subBranches: ['Liga pontos médios', 'Fecha nas extremidades'],
      },
    ],
    items: [
      {
        topic: 'Fórmula de Sturges (k) e Amplitude (h)',
        formula: 'k = 1 + 3,322 · log₁₀(n)   |   AT = Xmáx − Xmín   |   h = AT / k',
        explanation: 'Calcula quantas classes (linhas) a tabela deve ter para n observações e define o tamanho (amplitude h) de cada intervalo.',
        example: 'Para n = 50 dados variando de 12 a 72: AT = 60, k ≈ 6,64 → 7 classes, h = 60 / 7 ≈ 9.',
      },
      {
        topic: 'Distribuição de Frequência com Classes',
        formula: 'frᵢ = fᵢ / n   |   Fᵢ = f₁ + f₂ + ... + fᵢ   |   xᵢ = (Lᵢ + lᵢ) / 2',
        explanation: 'fᵢ é a frequência absoluta da classe; frᵢ é a relativa (proporção); Fᵢ é a acumulada; xᵢ é o ponto médio usado para cálculos.',
        example: 'Classe [20 ⊢ 30) com fᵢ = 12 em n = 60: frᵢ = 20% e ponto médio xᵢ = 25.',
      },
      {
        topic: 'Histograma e Polígono de Frequência',
        formula: 'Retângulos contíguos (base = h, altura = fᵢ) + Linha nos pontos (xᵢ, fᵢ)',
        explanation: 'O histograma mostra a densidade em cada intervalo sem espaços entre barras. O polígono liga os pontos médios superiores das barras.',
        example: 'Se a classe [20 ⊢ 30) tem fᵢ = 12, o vértice do polígono fica no ponto (25, 12).',
      },
    ],
  },
  {
    name: 'Tendência Central e Dispersão',
    tag: 'MAPA 02 · MEDIDAS RESUMO',
    center: 'Medidas Resumo',
    subCenter: 'Centro & Espalhamento',
    color: '#baa8ec',
    summary: 'Como resumir o centro dos dados e medir o quanto eles variam em torno da média.',
    branches: [
      {
        label: 'Médias',
        formula: 'x̄ = ∑xᵢ / n',
        subBranches: ['Ponderada: ∑(xᵢ·pᵢ)/∑pᵢ', 'Mediana (Md) & Moda (Mo)'],
      },
      {
        label: 'Variância (s²)',
        formula: 's² = ∑(xᵢ − x̄)² / (n−1)',
        subBranches: ['Desvios ao quadrado', 'Populacional divide por N'],
      },
      {
        label: 'Desvio Padrão',
        formula: 's = √s²',
        subBranches: ['Mesma unidade dos dados', 'Quanto menor, mais regular'],
      },
      {
        label: 'Coef. Variação',
        formula: 'CV = (s / x̄) · 100%',
        subBranches: ['Adimensional (%)', 'CV < 15% = Baixa dispersão'],
      },
    ],
    items: [
      {
        topic: 'Média Simples e Média Ponderada',
        formula: 'x̄ = ∑xᵢ / n   |   x̄ₚ = ∑(xᵢ · pᵢ) / ∑pᵢ',
        explanation: 'A média simples soma todos os valores e divide por n. A ponderada multiplica cada valor pelo seu peso (ou frequência fᵢ) antes de dividir pela soma dos pesos.',
        example: 'Notas 6 (peso 1) e 9 (peso 2): x̄ₚ = (6·1 + 9·2) / (1 + 2) = 24 / 3 = 8,0.',
      },
      {
        topic: 'Variância e Desvio Padrão',
        formula: 's² = ∑(xᵢ − x̄)² / (n − 1)   |   s = √s²',
        explanation: 'A variância calcula a média dos desvios ao quadrado. O desvio padrão extrai a raiz quadrada para retornar à unidade original da variável.',
        example: 'Amostra {2, 4, 6} com x̄ = 4: s² = [(−2)² + 0² + 2²] / 2 = 4 → s = √4 = 2.',
      },
      {
        topic: 'Coeficiente de Variação (CV)',
        formula: 'CV = (s / x̄) · 100%',
        explanation: 'Medida adimensional em porcentagem que permite comparar a dispersão de conjuntos com unidades ou médias muito diferentes.',
        example: 'Se x̄ = 50 e s = 5, então CV = (5 / 50) · 100% = 10% (conjunto homogêneo).',
      },
    ],
  },
  {
    name: 'Correlação e Regressão Linear',
    tag: 'MAPA 03 · RELAÇÃO ENTRE VARIÁVEIS',
    center: 'Regressão',
    subCenter: 'X → Prevê → Y',
    color: '#e9b58f',
    summary: 'Como verificar se duas variáveis X e Y andam juntas e construir uma equação de previsão.',
    branches: [
      {
        label: 'Correlação (r)',
        formula: 'r = Sₓᵧ / √(Sₓₓ·Sᵧᵧ)',
        subBranches: ['Varia de −1 até +1', 'r > 0 (direta) | r < 0 (inversa)'],
      },
      {
        label: 'Determinação R²',
        formula: 'R² = r²',
        subBranches: ['% da variação explicada', 'Qualidade do ajuste'],
      },
      {
        label: 'Inclinação (b)',
        formula: 'b = Sₓᵧ / Sₓₓ',
        subBranches: ['Taxa de variação de Y', 'Quanto Y muda por +1 em X'],
      },
      {
        label: 'Reta Estimada',
        formula: 'ŷ = a + b·x',
        subBranches: ['Intercepto: a = ȳ − b·x̄', 'Previsão de valores futuros'],
      },
    ],
    items: [
      {
        topic: 'Coeficiente de Correlação Linear (r)',
        formula: 'r = Sₓᵧ / √(Sₓₓ · Sᵧᵧ)   onde −1 ≤ r ≤ +1',
        explanation: 'r > 0 indica correlação positiva (X sobe, Y sobe); r < 0 indica negativa; r ≈ 0 indica ausência de relação linear. R² = r² mostra o % explicado.',
        example: 'r = 0,92 indica forte correlação linear positiva (R² = 0,846 → 84,6% explicado).',
      },
      {
        topic: 'Equação da Reta de Regressão (Mínimos Quadrados)',
        formula: 'ŷ = a + b·x   |   b = Sₓᵧ / Sₓₓ   |   a = ȳ − b·x̄',
        explanation: 'b representa quanto Y varia a cada +1 unidade em X. a é o valor de Y quando X = 0.',
        example: 'Se ŷ = 2,5 + 1,4x, para x = 5 horas de estudo prevemos ŷ = 2,5 + 7 = 9,5.',
      },
    ],
  },
  {
    name: 'Fundamentos de Probabilidade',
    tag: 'MAPA 04 · INCERTEZA E EVENTOS',
    center: 'Probabilidade',
    subCenter: '0 ≤ P(A) ≤ 1',
    color: '#9bcbd8',
    summary: 'As regras para calcular chances em experimentos aleatórios e atualizar probabilidades com novas informações.',
    branches: [
      {
        label: 'Exp. Aleatório',
        formula: 'P(A) = n(A) / n(Ω)',
        subBranches: ['Espaço Amostral (Ω)', 'Complementar: P(Ā) = 1 − P(A)'],
      },
      {
        label: 'Regra da União',
        formula: 'P(A∪B) = P(A)+P(B)−P(A∩B)',
        subBranches: ['Mutuamente exclusivos:', 'P(A ∩ B) = 0'],
      },
      {
        label: 'Condicional',
        formula: 'P(A|B) = P(A ∩ B) / P(B)',
        subBranches: ['Reduz o espaço para B', 'Dado que B já ocorreu'],
      },
      {
        label: 'Independentes',
        formula: 'P(A ∩ B) = P(A) · P(B)',
        subBranches: ['Um não afeta o outro', 'P(A|B) = P(A)'],
      },
    ],
    items: [
      {
        topic: 'Experimento Aleatório e Espaço Amostral (Ω)',
        formula: 'P(A) = n(A) / n(Ω)   |   0 ≤ P(A) ≤ 1   |   P(Ā) = 1 − P(A)',
        explanation: 'Experimento aleatório tem resultado incerto mesmo repetido nas mesmas condições. Ω é o conjunto de todos os resultados possíveis.',
        example: 'Lançar um dado: Ω = {1,2,3,4,5,6}. Evento A (par) = {2,4,6} → P(A) = 3/6 = 0,5.',
      },
      {
        topic: 'Probabilidade Condicional e Eventos Independentes',
        formula: 'P(A|B) = P(A ∩ B) / P(B)   |   Independentes: P(A ∩ B) = P(A) · P(B)',
        explanation: 'P(A|B) é a chance de A ocorrer dado que B ocorreu. Dois eventos são independentes quando a ocorrência de um não altera a chance do outro.',
        example: 'Lançar duas moedas: P(Cara 1 e Cara 2) = 0,5 · 0,5 = 0,25 (25%).',
      },
    ],
  },
  {
    name: 'V.A. Discretas, Binomial e Poisson',
    tag: 'MAPA 05 · MODELOS DISCRETOS',
    center: 'V.A. Discretas',
    subCenter: 'Contagem (0, 1, 2...)',
    color: '#e7b5c6',
    summary: 'Distribuições de probabilidade para variáveis de contagem, valor esperado e eventos raros.',
    branches: [
      {
        label: 'Esperança E(X)',
        formula: 'E(X) = ∑ xᵢ · P(xᵢ)',
        subBranches: ['Média teórica ponderada', 'Soma das probs ∑P(xᵢ) = 1'],
      },
      {
        label: 'Variância Var(X)',
        formula: 'Var(X) = E(X²) − [E(X)]²',
        subBranches: ['Dispersão da V.A.', 'Desvio: DP(X) = √Var(X)'],
      },
      {
        label: 'Binomial B(n,p)',
        formula: 'C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ',
        subBranches: ['Combinatória n!/[k!(n−k)!]', 'E(X) = n·p | Var = n·p·q'],
      },
      {
        label: 'Poisson (Euler)',
        formula: 'P(X=k) = (e⁻ᵏ · λᵏ) / k!',
        subBranches: ['Euler e ≈ 2,71828', 'Taxa λ = E(X) = Var(X)'],
      },
    ],
    items: [
      {
        topic: 'Variável Aleatória Discreta: E(X) e Var(X)',
        formula: 'E(X) = ∑ xᵢ · P(X = xᵢ)   |   Var(X) = ∑ [xᵢ − E(X)]² · P(xᵢ) = E(X²) − [E(X)]²',
        explanation: 'E(X) é a média teórica da distribuição discreta e Var(X) mede a dispersão dos valores possíveis.',
        example: 'Prêmio de R$10 (p=0,2) ou R$0 (p=0,8): E(X) = 10·0,2 + 0·0,8 = R$ 2,00.',
      },
      {
        topic: 'Distribuição Binomial e Combinatória',
        formula: 'P(X = k) = C(n,k) · pᵏ · (1 − p)ⁿ⁻ᵏ   |   C(n,k) = n! / [k!(n − k)!]',
        explanation: 'Usada para n tentativas independentes com chance fixa p de sucesso. Média E(X) = n·p e Variância Var(X) = n·p·(1 − p).',
        example: 'n = 5 questões (p = 0,2 chute), chance de acertar k = 1: C(5,1)·0,2¹·0,8⁴ = 0,4096.',
      },
      {
        topic: 'Distribuição de Poisson (Número de Euler e)',
        formula: 'P(X = k) = (e⁻ᵏ · λᵏ) / k!   |   E(X) = λ   |   Var(X) = λ',
        explanation: 'Calcula a chance de k ocorrências em um intervalo contínuo dada a taxa média λ (com e ≈ 2,71828).',
        example: 'Média λ = 2 falhas/dia. Chance de k = 0 falhas: P(X=0) = (e⁻² · 2⁰)/0! ≈ 0,1353.',
      },
    ],
  },
  {
    name: 'V.A. Contínua e Distribuição Normal',
    tag: 'MAPA 06 · MODELOS CONTÍNUOS',
    center: 'V.A. Contínua',
    subCenter: 'Curva Normal N(μ, σ²)',
    color: '#c8ec91',
    summary: 'Como calcular probabilidades por meio de áreas sob curvas contínuas e usar a tabela Normal Padrão.',
    branches: [
      {
        label: 'Densidade f(x)',
        formula: 'P(a ≤ X ≤ b) = ∫ₐᵇ f(x)dx',
        subBranches: ['Área total sob curva = 1', 'Ponto exato: P(X = c) = 0'],
      },
      {
        label: 'Curva de Gauss',
        formula: 'Simétrica em torno de μ',
        subBranches: ['Média = Mediana = Moda', 'Formato de sino'],
      },
      {
        label: 'Escore-Z',
        formula: 'Z = (X − μ) / σ',
        subBranches: ['Converte para N(0, 1)', 'Consulta na Tabela Z'],
      },
      {
        label: 'Regra Empírica',
        formula: '68% · 95% · 99,7%',
        subBranches: ['±1σ (68,2%) | ±2σ (95,4%)', '±3σ (99,7% dos dados)'],
      },
    ],
    items: [
      {
        topic: 'Variável Aleatória Contínua',
        formula: 'P(a ≤ X ≤ b) = ∫ₐᵇ f(x) dx   |   ∫₋∞⁺∞ f(x) dx = 1   |   P(X = c) = 0',
        explanation: 'Diferente da discreta, a V.A. contínua assume infinitos valores em intervalos. A probabilidade em um ponto exato é sempre zero; calcula-se apenas por intervalos.',
        example: 'Tempo de espera entre 2 e 5 minutos corresponde à área sob f(x) no intervalo [2, 5].',
      },
      {
        topic: 'Distribuição Normal e Escore-Z',
        formula: 'Z = (X − μ) / σ   →   Z ~ N(0, 1)',
        explanation: 'A curva Normal é em forma de sino, simétrica em torno da média μ. A fórmula Z transforma qualquer Normal em Normal Padrão (média 0, desvio 1) para consulta na tabela.',
        example: 'Se μ = 100 e σ = 15, um valor X = 130 equivale a Z = (130 − 100) / 15 = +2,0.',
      },
    ],
  },
];