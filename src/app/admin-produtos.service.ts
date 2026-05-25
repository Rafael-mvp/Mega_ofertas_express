import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produto } from './produto.model';

// Alias para manter compatibilidade com os componentes admin existentes
export type AdminProduto = Produto;

@Injectable({ providedIn: 'root' })
export class AdminProdutosService {
  private produtosSubject = new BehaviorSubject<Produto[]>([

    // ── Eletrônicos ────────────────────────────────────────────────────────────
    {
      id: 1, nome: 'Smart TV 50" 4K Samsung', categoria: 'Eletrônicos',
      precoOriginal: 2499.99, precoPromocional: 1999.99, precoPix: 1899.99,
      parcelas: 10, desconto: 20, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Smart+TV',
      preco: 2499.99, estoque: 12,
    },
    {
      id: 9, nome: 'Console PlayStation 5 Slim', categoria: 'Eletrônicos',
      precoOriginal: 3999.99, precoPromocional: 3499.99, precoPix: 3324.99,
      parcelas: 12, desconto: 13, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=PS5',
      preco: 3999.99, estoque: 15,
    },
    {
      id: 10, nome: 'Console Xbox Series X 1TB', categoria: 'Eletrônicos',
      precoOriginal: 4299.99, precoPromocional: 3599.99, precoPix: 3419.99,
      parcelas: 12, desconto: 16, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Xbox+Series+X',
      preco: 4299.99, estoque: 10,
    },
    {
      id: 11, nome: 'Drone DJI Mini 3 Pro', categoria: 'Eletrônicos',
      precoOriginal: 3999.99, precoPromocional: 2999.99, precoPix: 2849.99,
      parcelas: 10, desconto: 25, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=DJI+Mini+3',
      preco: 3999.99, estoque: 8,
    },
    {
      id: 12, nome: 'Câmera de Ação GoPro Hero 12', categoria: 'Eletrônicos',
      precoOriginal: 2499.99, precoPromocional: 1999.99, precoPix: 1899.99,
      parcelas: 8, desconto: 20, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=GoPro+Hero+12',
      preco: 2499.99, estoque: 20,
    },

    // ── Informática ───────────────────────────────────────────────────────────
    {
      id: 2, nome: 'Notebook Dell Inspiron 15', categoria: 'Informática',
      precoOriginal: 4299.90, precoPromocional: 3499.90, precoPix: 3324.91,
      parcelas: 12, desconto: 19, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Notebook',
      preco: 4299.90, estoque: 7,
    },
    {
      id: 7, nome: 'Monitor LG 27" Full HD', categoria: 'Informática',
      precoOriginal: 1499.00, precoPromocional: 1199.00, precoPix: 1139.05,
      parcelas: 6, desconto: 20, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Monitor+LG',
      preco: 1499.00, estoque: 18,
    },
    {
      id: 8, nome: 'Teclado Mecânico Redragon', categoria: 'Informática',
      precoOriginal: 449.90, precoPromocional: 349.90, precoPix: 332.41,
      parcelas: 4, desconto: 22, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Teclado',
      preco: 449.90, estoque: 60,
    },
    {
      id: 13, nome: 'SSD Samsung 1TB 980 PRO NVMe', categoria: 'Informática',
      precoOriginal: 599.99, precoPromocional: 449.99, precoPix: 427.49,
      parcelas: 6, desconto: 25, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=SSD+Samsung',
      preco: 599.99, estoque: 80,
    },
    {
      id: 14, nome: 'Desktop Gamer i7 + RTX 4060', categoria: 'Informática',
      precoOriginal: 6999.99, precoPromocional: 5499.99, precoPix: 5224.99,
      parcelas: 12, desconto: 21, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=PC+Gamer',
      preco: 6999.99, estoque: 5,
    },
    {
      id: 15, nome: 'Mouse Logitech MX Master 3S', categoria: 'Informática',
      precoOriginal: 699.99, precoPromocional: 549.99, precoPix: 522.49,
      parcelas: 6, desconto: 21, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=MX+Master+3S',
      preco: 699.99, estoque: 40,
    },

    // ── Áudio ─────────────────────────────────────────────────────────────────
    {
      id: 3, nome: 'Fone JBL Tune 510BT', categoria: 'Áudio',
      precoOriginal: 249.99, precoPromocional: 199.99, precoPix: 189.99,
      parcelas: 3, desconto: 20, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Fone+JBL',
      preco: 249.99, estoque: 45,
    },
    {
      id: 16, nome: 'Caixa de Som JBL Charge 5', categoria: 'Áudio',
      precoOriginal: 1249.99, precoPromocional: 999.99, precoPix: 949.99,
      parcelas: 6, desconto: 20, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=JBL+Charge+5',
      preco: 1249.99, estoque: 35,
    },
    {
      id: 17, nome: 'Headset Sony WH-1000XM5', categoria: 'Áudio',
      precoOriginal: 1999.99, precoPromocional: 1599.99, precoPix: 1519.99,
      parcelas: 8, desconto: 20, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=WH-1000XM5',
      preco: 1999.99, estoque: 12,
    },
    {
      id: 18, nome: 'Soundbar Samsung HW-Q600C 3.1.2', categoria: 'Áudio',
      precoOriginal: 1999.99, precoPromocional: 1499.99, precoPix: 1424.99,
      parcelas: 8, desconto: 25, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Soundbar+Samsung',
      preco: 1999.99, estoque: 18,
    },
    {
      id: 19, nome: 'Apple AirPods Pro 2ª Geração', categoria: 'Áudio',
      precoOriginal: 2199.99, precoPromocional: 1799.99, precoPix: 1709.99,
      parcelas: 10, desconto: 18, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=AirPods+Pro+2',
      preco: 2199.99, estoque: 25,
    },

    // ── Games ─────────────────────────────────────────────────────────────────
    {
      id: 20, nome: 'Controle DualSense PS5 Branco', categoria: 'Games',
      precoOriginal: 499.99, precoPromocional: 399.99, precoPix: 379.99,
      parcelas: 4, desconto: 20, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=DualSense',
      preco: 499.99, estoque: 50,
    },
    {
      id: 21, nome: 'Controle Xbox Wireless Carbon Black', categoria: 'Games',
      precoOriginal: 449.99, precoPromocional: 359.99, precoPix: 341.99,
      parcelas: 4, desconto: 20, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Xbox+Controller',
      preco: 449.99, estoque: 45,
    },
    {
      id: 22, nome: 'Cadeira Gamer ThunderX3 TC5 Max', categoria: 'Games',
      precoOriginal: 1699.99, precoPromocional: 1299.99, precoPix: 1234.99,
      parcelas: 10, desconto: 24, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Cadeira+Gamer',
      preco: 1699.99, estoque: 20,
    },
    {
      id: 23, nome: 'Headset Gamer HyperX Cloud II', categoria: 'Games',
      precoOriginal: 699.99, precoPromocional: 499.99, precoPix: 474.99,
      parcelas: 6, desconto: 29, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=HyperX+Cloud+II',
      preco: 699.99, estoque: 30,
    },
    {
      id: 24, nome: 'God of War Ragnarök PS5', categoria: 'Games',
      precoOriginal: 299.99, precoPromocional: 199.99, precoPix: 189.99,
      parcelas: 3, desconto: 33, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=God+of+War',
      preco: 299.99, estoque: 60,
    },

    // ── TV & Vídeo ────────────────────────────────────────────────────────────
    {
      id: 25, nome: 'Smart TV OLED LG 55" 4K', categoria: 'TV & Vídeo',
      precoOriginal: 6999.99, precoPromocional: 5499.99, precoPix: 5224.99,
      parcelas: 12, desconto: 21, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=OLED+LG+55',
      preco: 6999.99, estoque: 8,
    },
    {
      id: 26, nome: 'Smart TV QLED Samsung 65" 4K', categoria: 'TV & Vídeo',
      precoOriginal: 7999.99, precoPromocional: 5999.99, precoPix: 5699.99,
      parcelas: 12, desconto: 25, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=QLED+Samsung+65',
      preco: 7999.99, estoque: 6,
    },
    {
      id: 27, nome: 'Projetor Epson Home Cinema 2350', categoria: 'TV & Vídeo',
      precoOriginal: 4999.99, precoPromocional: 3999.99, precoPix: 3799.99,
      parcelas: 12, desconto: 20, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Projetor+Epson',
      preco: 4999.99, estoque: 10,
    },
    {
      id: 28, nome: 'Chromecast com Google TV 4K', categoria: 'TV & Vídeo',
      precoOriginal: 499.99, precoPromocional: 379.99, precoPix: 360.99,
      parcelas: 4, desconto: 24, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Chromecast+4K',
      preco: 499.99, estoque: 40,
    },
    {
      id: 29, nome: 'Amazon Fire TV Stick 4K Max', categoria: 'TV & Vídeo',
      precoOriginal: 399.99, precoPromocional: 299.99, precoPix: 284.99,
      parcelas: 4, desconto: 25, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Fire+TV+Stick',
      preco: 399.99, estoque: 55,
    },

    // ── Câmeras ───────────────────────────────────────────────────────────────
    {
      id: 30, nome: 'Câmera Canon EOS Rebel SL3 Kit 18-55mm', categoria: 'Câmeras',
      precoOriginal: 4499.99, precoPromocional: 3599.99, precoPix: 3419.99,
      parcelas: 12, desconto: 20, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Canon+SL3',
      preco: 4499.99, estoque: 12,
    },
    {
      id: 31, nome: 'Câmera Sony Alpha ZV-E10 + 16-50mm', categoria: 'Câmeras',
      precoOriginal: 5999.99, precoPromocional: 4799.99, precoPix: 4559.99,
      parcelas: 12, desconto: 20, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Sony+ZV-E10',
      preco: 5999.99, estoque: 7,
    },
    {
      id: 32, nome: 'Webcam Logitech C920 Pro HD 1080p', categoria: 'Câmeras',
      precoOriginal: 599.99, precoPromocional: 449.99, precoPix: 427.49,
      parcelas: 4, desconto: 25, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Logitech+C920',
      preco: 599.99, estoque: 50,
    },
    {
      id: 33, nome: 'Câmera de Segurança TP-Link Tapo C520WS', categoria: 'Câmeras',
      precoOriginal: 299.99, precoPromocional: 219.99, precoPix: 208.99,
      parcelas: 3, desconto: 27, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Tapo+C520WS',
      preco: 299.99, estoque: 80,
    },
    {
      id: 34, nome: 'Câmera Instax Mini 12 Fujifilm', categoria: 'Câmeras',
      precoOriginal: 599.99, precoPromocional: 449.99, precoPix: 427.49,
      parcelas: 4, desconto: 25, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Instax+Mini+12',
      preco: 599.99, estoque: 35,
    },

    // ── Smartwatches ──────────────────────────────────────────────────────────
    {
      id: 35, nome: 'Apple Watch Series 9 45mm GPS', categoria: 'Smartwatches',
      precoOriginal: 4499.99, precoPromocional: 3599.99, precoPix: 3419.99,
      parcelas: 12, desconto: 20, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Apple+Watch+S9',
      preco: 4499.99, estoque: 18,
    },
    {
      id: 36, nome: 'Samsung Galaxy Watch 6 Classic 47mm', categoria: 'Smartwatches',
      precoOriginal: 2499.99, precoPromocional: 1999.99, precoPix: 1899.99,
      parcelas: 10, desconto: 20, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Galaxy+Watch+6',
      preco: 2499.99, estoque: 22,
    },
    {
      id: 37, nome: 'Amazfit GTR 4 Smartwatch', categoria: 'Smartwatches',
      precoOriginal: 999.99, precoPromocional: 699.99, precoPix: 664.99,
      parcelas: 6, desconto: 30, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Amazfit+GTR+4',
      preco: 999.99, estoque: 40,
    },
    {
      id: 38, nome: 'Garmin Fenix 7 Solar', categoria: 'Smartwatches',
      precoOriginal: 6999.99, precoPromocional: 5599.99, precoPix: 5319.99,
      parcelas: 12, desconto: 20, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Garmin+Fenix+7',
      preco: 6999.99, estoque: 5,
    },
    {
      id: 39, nome: 'Xiaomi Redmi Watch 4', categoria: 'Smartwatches',
      precoOriginal: 499.99, precoPromocional: 349.99, precoPix: 332.49,
      parcelas: 4, desconto: 30, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Redmi+Watch+4',
      preco: 499.99, estoque: 60,
    },

    // ── Tablets ───────────────────────────────────────────────────────────────
    {
      id: 40, nome: 'iPad Air M1 10.9" Wi-Fi 64GB', categoria: 'Tablets',
      precoOriginal: 6499.99, precoPromocional: 5199.99, precoPix: 4939.99,
      parcelas: 12, desconto: 20, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=iPad+Air+M1',
      preco: 6499.99, estoque: 14,
    },
    {
      id: 41, nome: 'Samsung Galaxy Tab S9 FE 256GB', categoria: 'Tablets',
      precoOriginal: 3199.99, precoPromocional: 2499.99, precoPix: 2374.99,
      parcelas: 12, desconto: 22, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Galaxy+Tab+S9+FE',
      preco: 3199.99, estoque: 20,
    },
    {
      id: 42, nome: 'iPad Mini 6ª Geração Wi-Fi 64GB', categoria: 'Tablets',
      precoOriginal: 5499.99, precoPromocional: 4499.99, precoPix: 4274.99,
      parcelas: 12, desconto: 18, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=iPad+Mini+6',
      preco: 5499.99, estoque: 10,
    },
    {
      id: 43, nome: 'Lenovo Tab P12 Pro 12.6" 256GB', categoria: 'Tablets',
      precoOriginal: 4199.99, precoPromocional: 3299.99, precoPix: 3134.99,
      parcelas: 12, desconto: 21, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Lenovo+Tab+P12',
      preco: 4199.99, estoque: 15,
    },
    {
      id: 44, nome: 'Amazon Fire HD 10 Plus 32GB', categoria: 'Tablets',
      precoOriginal: 1199.99, precoPromocional: 899.99, precoPix: 854.99,
      parcelas: 6, desconto: 25, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Fire+HD+10',
      preco: 1199.99, estoque: 30,
    },

    // ── Eletrodomésticos ──────────────────────────────────────────────────────
    {
      id: 4, nome: 'Geladeira Frost Free 400L', categoria: 'Eletrodomésticos',
      precoOriginal: 3499.00, precoPromocional: 2799.00, precoPix: 2659.05,
      parcelas: 12, desconto: 20, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Geladeira',
      preco: 3499.00, estoque: 5,
    },
    {
      id: 6, nome: 'Cafeteira Nespresso Essenza', categoria: 'Eletrodomésticos',
      precoOriginal: 599.90, precoPromocional: 449.90, precoPix: 427.41,
      parcelas: 6, desconto: 25, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Nespresso',
      preco: 599.90, estoque: 30,
    },
    {
      id: 45, nome: 'Máquina de Lavar Electrolux 15kg Inverter', categoria: 'Eletrodomésticos',
      precoOriginal: 3499.99, precoPromocional: 2799.99, precoPix: 2659.99,
      parcelas: 12, desconto: 20, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Lava+Roupa+15kg',
      preco: 3499.99, estoque: 8,
    },
    {
      id: 46, nome: 'Micro-ondas Samsung 32L Inox Smart', categoria: 'Eletrodomésticos',
      precoOriginal: 849.99, precoPromocional: 649.99, precoPix: 617.49,
      parcelas: 6, desconto: 24, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Micro-ondas+Samsung',
      preco: 849.99, estoque: 25,
    },
    {
      id: 47, nome: 'Ar-Condicionado Split 12.000 BTUs Inverter LG', categoria: 'Eletrodomésticos',
      precoOriginal: 3299.99, precoPromocional: 2599.99, precoPix: 2469.99,
      parcelas: 12, desconto: 21, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Ar-Condicionado+LG',
      preco: 3299.99, estoque: 10,
    },
    {
      id: 48, nome: 'Aspirador de Pó Robô Roomba i3+', categoria: 'Eletrodomésticos',
      precoOriginal: 2999.99, precoPromocional: 2299.99, precoPix: 2184.99,
      parcelas: 10, desconto: 23, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Roomba+i3',
      preco: 2999.99, estoque: 12,
    },

    // ── Acessórios ────────────────────────────────────────────────────────────
    {
      id: 49, nome: 'Capa MagSafe iPhone 15 Pro Max', categoria: 'Acessórios',
      precoOriginal: 199.99, precoPromocional: 129.99, precoPix: 123.49,
      parcelas: 2, desconto: 35, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Capa+MagSafe',
      preco: 199.99, estoque: 100,
    },
    {
      id: 50, nome: 'Carregador GaN 65W USB-C + USB-A', categoria: 'Acessórios',
      precoOriginal: 299.99, precoPromocional: 199.99, precoPix: 189.99,
      parcelas: 3, desconto: 33, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Carregador+GaN+65W',
      preco: 299.99, estoque: 90,
    },
    {
      id: 51, nome: 'Cabo USB-C Lightning 2m Apple Certificado', categoria: 'Acessórios',
      precoOriginal: 179.99, precoPromocional: 119.99, precoPix: 113.99,
      parcelas: 2, desconto: 33, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Cabo+USB-C',
      preco: 179.99, estoque: 120,
    },
    {
      id: 52, nome: 'Suporte Articulado para TV 32-70" VESA', categoria: 'Acessórios',
      precoOriginal: 249.99, precoPromocional: 169.99, precoPix: 161.49,
      parcelas: 3, desconto: 32, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Suporte+TV',
      preco: 249.99, estoque: 75,
    },
    {
      id: 53, nome: 'Hub USB-C 7 em 1 Baseus 4K HDMI', categoria: 'Acessórios',
      precoOriginal: 349.99, precoPromocional: 249.99, precoPix: 237.49,
      parcelas: 3, desconto: 29, destaque: false, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=Hub+USB-C+7em1',
      preco: 349.99, estoque: 85,
    },

    // ── Smartphones (existente) ───────────────────────────────────────────────
    {
      id: 5, nome: 'iPhone 15 128GB', categoria: 'Smartphones',
      precoOriginal: 5999.99, precoPromocional: 4799.99, precoPix: 4559.99,
      parcelas: 12, desconto: 20, destaque: true, emPromocao: true,
      imagem: 'https://placehold.co/300x300/2A2C2E/AAAAAA/png?text=iPhone+15',
      preco: 5999.99, estoque: 20,
    },
  ]);

  readonly produtos$: Observable<Produto[]> = this.produtosSubject.asObservable();

  getProdutos(): Produto[] {
    return this.produtosSubject.value;
  }

  getProdutoById(id: number): Produto | undefined {
    return this.produtosSubject.value.find(p => p.id === id);
  }

  atualizarProduto(patch: { id: number; nome: string; preco: number; categoria: string; estoque: number }): void {
    const lista = this.produtosSubject.value;
    const idx = lista.findIndex(p => p.id === patch.id);
    if (idx === -1) return;

    const atual = lista[idx];
    const precoPromo = patch.preco * (1 - atual.desconto / 100);
    const atualizado: Produto = {
      ...atual,
      nome:             patch.nome,
      categoria:        patch.categoria,
      estoque:          patch.estoque,
      preco:            patch.preco,
      precoOriginal:    patch.preco,
      precoPromocional: Math.round(precoPromo * 100) / 100,
      precoPix:         Math.round(precoPromo * 0.95 * 100) / 100,
    };

    const nova = [...lista];
    nova[idx] = atualizado;
    this.produtosSubject.next(nova);
  }

  excluirProduto(id: number): void {
    this.produtosSubject.next(this.produtosSubject.value.filter(p => p.id !== id));
  }
}
