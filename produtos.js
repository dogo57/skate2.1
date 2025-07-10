// produtos.js

const produtosDB = {
    // --- SHAPES ---
    'shape-classico': {
        nome: "Shape Logo Classico",
        preco: "R$ 250,00",
        imagem: "https://via.placeholder.com/600x800/111?text=Shape+Classico",
        descricao: `• Material: 7 lâminas de Maple Canadense selecionado.
• Tecnologia: Prensado com resina Epóxi em prensa individual (Single Deck Press).
• Concave: Médio, o mais versátil para manobras de street e transições.
• Diferencial: Pop rápido e duradouro, com leveza e resistência superior.
• Gráfico: Transfer em Heat Transfer de alta definição.`
    },
    'shape-psycho': {
        nome: "Shape Rua Psycho",
        preco: "R$ 260,00",
        imagem: "https://via.placeholder.com/600x800/111?text=Shape+Psycho",
        descricao: `• Material: 7 lâminas de Hard Rock Maple.
• Concave: Alto, para maior controle nos pés e precisão nos flips.
• Diferencial: A arte psicodélica garante o estilo na sessão.
• Pop: Consistente e altamente responsivo para manobras técnicas.
• Gráfico: Impressão digital com acabamento envernizado para maior durabilidade.`
    },
    'shape-gradient': {
        nome: "Shape Rua Gradient",
        preco: "R$ 255,00",
        imagem: "https://via.placeholder.com/600x800/111?text=Shape+Gradient",
        descricao: `• Material: 7 lâminas de Maple Canadense.
• Tecnologia: Prensagem a frio com resina premium.
• Concave: Baixo/Médio, ideal para quem busca mais estabilidade e controle.
• Diferencial: Design minimalista com a mesma performance dos shapes RUA.
• Gráfico: Acabamento fosco com pintura em degradê.`
    },
    'shape-pro-leo': {
        nome: "Shape Pro Model Leo Fumaça",
        preco: "R$ 280,00",
        imagem: "https://via.placeholder.com/600x800/111?text=Shape+Leo+Fumaça",
        descricao: `• Modelo: Pro-Model assinado pelo skatista Leo Fumaça.
• Material: 7 lâminas do mais puro Hard Rock Maple.
• Concave: Médio/Alto, desenvolvido sob as especificações exatas do atleta.
• Medidas: Nose e Tail simétricos para manobrar de switch com perfeição.
• Diferencial: Máximo controle, pop absurdo e durabilidade para sessões pesadas.`
    },

    // --- ROUPAS ---
    'camiseta-box': {
        nome: "Camiseta Logo Box",
        preco: "R$ 95,00",
        imagem: "https://via.placeholder.com/600x800/111?text=Camiseta+Box",
        descricao: `• Tecido: Malha premium 100% algodão, fio 30.1 penteado.
• Gramatura: Alta (Heavyweight), conferindo mais estrutura e durabilidade.
• Modelagem: Corte reto clássico (Classic Fit).
• Detalhes: Gola canelada de 2cm e reforço ombro a ombro.
• Estampa: Serigrafia (Silk-Screen) de alta precisão e toque suave.`
    },
    'moletom-capuz': {
        nome: "Moletom Rua com Capuz",
        preco: "R$ 299,00",
        imagem: "https://via.placeholder.com/600x800/111?text=Moletom+Capuz",
        descricao: `• Tecido: Moletom 3 cabos (50% Algodão, 50% Poliéster) peluciado internamente.
• Gramatura: Pesada, ideal para o frio intenso.
• Modelagem: Ampla e confortável (Relaxed Fit).
• Detalhes: Bolso canguru, capuz com forro duplo, ilhós de metal e punhos canelados.
• Logo: Bordado de alta definição no peito.`
    },
    'camiseta-estonada': {
        nome: "Camiseta Logo Estonada",
        preco: "R$ 110,00",
        imagem: "https://via.placeholder.com/600x800/111?text=Camiseta+Estonada",
        descricao: `• Tecido: Malha 100% algodão com processo de lavagem estonada.
• Toque: Extremamente macio e confortável.
• Visual: Aspecto vintage e desbotado. Cada peça tem características únicas.
• Modelagem: Levemente mais justa que o corte clássico (Slim Fit).
• Detalhes: Costura dupla reforçada na gola e ombros.`
    },
    'moletom-crewneck': {
        nome: "Moletom Crewneck Classic",
        preco: "R$ 240,00",
        imagem: "https://via.placeholder.com/600x800/111?text=Moletom+Crewneck",
        descricao: `• Tecido: Moletom careca de 2 cabos (75% algodão, 25% poliéster) sem pelúcia.
• Versatilidade: Perfeito para sobreposições e dias de clima ameno.
• Modelagem: Regular, nem muito largo, nem muito justo.
• Detalhes: Gola, punhos e barra em ribana canelada.
• Logo: Etiqueta tecida aplicada na barra.`
    },
    
    // --- ACESSÓRIOS ---
    'rodas-classic': {
        nome: "Rodas Classic 54mm",
        preco: "R$ 180,00",
        imagem: "https://via.placeholder.com/600x800/111?text=Rodas+Classic",
        descricao: `• Material: Uretano de alta performance (High-Rebound Formula).
• Diâmetro: 54mm (tamanho versátil para street, mini-ramp e park).
• Dureza: 101A, para máxima velocidade e slides controlados.
• Superfície: Ideal para concreto liso, pistas e bowls.
• Shape: Clássico arredondado, para agilidade e menos atrito em grinds.`
    },
    'bone-dadhat': {
        nome: "Bone Dad Hat Preto",
        preco: "R$ 80,00",
        imagem: "https://via.placeholder.com/600x800/111?text=Boné+Dad+Hat",
        descricao: `• Modelo: Dad Hat (6 painéis, totalmente desestruturado).
• Tecido: Sarja 100% algodão.
• Detalhes: Aba curva, ilhós bordados para ventilação.
• Ajuste: Traseiro tipo strapback com fivela de metal envelhecido.
• Logo: Bordado de baixo relevo na parte frontal.`
    },
    'gorro-dock': {
        nome: "Gorro Dock Beanie",
        preco: "R$ 75,00",
        imagem: "https://via.placeholder.com/600x800/111?text=Gorro+Dock",
        descricao: `• Modelo: Dock Worker / Fisherman (curto, fica acima da orelha).
• Material: Trama de lã acrílica antialérgica.
• Elasticidade: Trama canelada que se ajusta perfeitamente.
• Detalhes: Pode ser usado com ou sem a dobra.
• Logo: Etiqueta tecida RUA aplicada na dobra.`
    },
    'truck-pro': {
        nome: "Truck RUA Pro 149mm",
        preco: "R$ 350,00",
        imagem: "https://via.placeholder.com/600x800/111?text=Truck+Pro",
        descricao: `• Modelo: Truck Profissional (par).
• Tamanho: 149mm, indicado para shapes de 8.25" a 8.75".
• Material: Liga de alumínio 356 T6 para máxima resistência.
• Componentes: Eixo e pino central em aço, amortecedores de uretano 92A.
• Geometria: Curvas rápidas e estáveis, com ótima resposta para manobras.`
    }
};