import { Button } from "@/components/ui/button";
import { InfiniteCarousel } from "@/components/InfiniteCarousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check, Play } from "lucide-react";
import productMockup from "@/assets/product-mockup.png";
import character1 from "@/assets/character-1.webp";
import character2 from "@/assets/character-2.webp";
import character3 from "@/assets/character-3.webp";
import character4 from "@/assets/character-4.png";
import character5 from "@/assets/character-5.png";
import character6 from "@/assets/character-6.png";
import character7 from "@/assets/character-7.png";
import character8 from "@/assets/character-8.png";
import character9 from "@/assets/character-9.png";
import character10 from "@/assets/character-10.png";
import character11 from "@/assets/character-11.png";
import character12 from "@/assets/character-12.png";
import character13 from "@/assets/character-13.png";
import tutorial1 from "@/assets/tutorial-1.jpg";
import tutorial2 from "@/assets/tutorial-2.jpg";
import tutorial3 from "@/assets/tutorial-3.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import guaranteeSeal from "@/assets/guarantee-seal.png";
import whatsappLogo from "@/assets/logo-whatsapp.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import bonusPuzzles from "@/assets/bonus-puzzles.webp";
import bonusMemory from "@/assets/bonus-memory.webp";
import bonusBobbie from "@/assets/bonus-bobbie.png";
const Index = () => {
  const today = new Date();
  const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear().toString().slice(-2)}`;
  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const characterImages = [<img src={character1} alt="Mulher Maravilha de papel" className="w-full h-auto rounded-xl shadow-md" />, <img src={character2} alt="Naruto de papel" className="w-full h-auto rounded-xl shadow-md" />, <img src={character3} alt="Baby Yoda de papel" className="w-full h-auto rounded-xl shadow-md" />, <img src={character4} alt="Mestre Kame de papel" className="w-full h-auto rounded-xl shadow-md" />, <img src={character5} alt="Hulk de papel" className="w-full h-auto rounded-xl shadow-md" />, <img src={character6} alt="Homem de Ferro de papel" className="w-full h-auto rounded-xl shadow-md" />, <img src={character7} alt="Round 6 de papel" className="w-full h-auto rounded-xl shadow-md" />, <img src={character8} alt="Minecraft Steve de papel" className="w-full h-auto rounded-xl shadow-md" />, <img src={character9} alt="Luffy de papel" className="w-full h-auto rounded-xl shadow-md" />, <img src={character10} alt="Capitão América de papel" className="w-full h-auto rounded-xl shadow-md" />, <img src={character11} alt="Stitch de papel" className="w-full h-auto rounded-xl shadow-md" />, <img src={character12} alt="Cavaleiro do Zodíaco de papel" className="w-full h-auto rounded-xl shadow-md" />, <img src={character13} alt="Homem Aranha de papel" className="w-full h-auto rounded-xl shadow-md" />];
  const tutorialImages = [<img src={tutorial1} alt="Passo 1: Recortar" className="w-full h-auto rounded-xl shadow-md object-cover" />, <img src={tutorial2} alt="Passo 2: Colar" className="w-full h-auto rounded-xl shadow-md object-cover" />, <img src={tutorial3} alt="Passo 3: Brincar" className="w-full h-auto rounded-xl shadow-md object-cover" />];
  const testimonialVideos = [<div className="relative w-full aspect-[9/16] min-h-[400px] bg-muted/30 rounded-xl">
      <video src="/videos/depoimento-1.mp4" className="w-full h-full object-contain rounded-xl shadow-md" controls playsInline preload="metadata" />
    </div>, <div className="relative w-full aspect-[9/16] min-h-[400px] bg-muted/30 rounded-xl">
      <video src="/videos/depoimento-2.mp4" className="w-full h-full object-contain rounded-xl shadow-md" controls playsInline preload="metadata" />
    </div>, <div className="relative w-full aspect-[9/16] min-h-[400px] bg-muted/30 rounded-xl">
      <video src="/videos/depoimento-3.mp4" className="w-full h-full object-contain rounded-xl shadow-md" controls playsInline preload="metadata" />
    </div>, <div className="relative w-full aspect-[9/16] min-h-[400px] bg-muted/30 rounded-xl">
      <video src="/videos/depoimento-4.mp4" className="w-full h-full object-contain rounded-xl shadow-md" controls playsInline preload="metadata" />
    </div>];
  return <div className="min-h-screen bg-background">
      {/* Discount Bar */}
      <div className="bg-destructive py-3 px-4 text-center shadow-md">
        <p className="text-accent font-bold text-sm sm:text-base">
          Desconto de 75% apenas hoje {formattedDate}
        </p>
      </div>

      {/* Hero Section */}
      <section className="bg-primary py-12 px-4 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 leading-tight">SUPER KIT +250 PERSONAGENS de papel para seu filho ficar longe das telas</h1>
          <div className="mb-8 max-w-2xl mx-auto">
            <img src={productMockup} alt="Kit de personagens de papel para imprimir" className="w-full h-auto rounded-2xl shadow-2xl" />
          </div>
          <div className="flex justify-center">
            <Button variant="cta" size="xl" onClick={scrollToOffer} className="w-full max-w-md">
              BAIXAR MEUS PERSONAGENS
            </Button>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="bg-background py-12 px-4 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-foreground text-3xl sm:text-4xl font-bold text-center mb-4">
            Conheça Alguns Dos Personagens
          </h2>
          <p className="text-primary text-lg sm:text-xl font-semibold text-center mb-8">
            DICA: Pergunte se seu pequeno ou pequena conhece algum deles. Temos certeza que sim!
          </p>
          <div className="max-w-md mx-auto">
            <InfiniteCarousel items={characterImages} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted py-12 px-4 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-foreground text-3xl sm:text-4xl font-bold text-center mb-12">Feito Para Desenvolver!</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-secondary flex-shrink-0 mt-2"></div>
              <div>
                <h3 className="text-foreground text-xl font-bold mb-2">Substitui o vício em telas</h3>
                
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-secondary flex-shrink-0 mt-2"></div>
              <div>
                <h3 className="text-foreground text-xl font-bold mb-2">Estimula a criatividade</h3>
                
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-secondary flex-shrink-0 mt-2"></div>
              <div>
                <h3 className="text-foreground text-xl font-bold mb-2">Desenvolve a coordenação motora</h3>
                
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-secondary flex-shrink-0 mt-2"></div>
              <div>
                <h3 className="text-foreground text-xl font-bold mb-2">Aumenta a aproximação com os Pais</h3>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="bg-background py-12 px-4 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-foreground text-3xl sm:text-4xl font-bold text-center mb-12">
            Tudo Separado Por Níveis! Veja Como Funciona.
          </h2>
          <div className="max-w-2xl mx-auto px-12">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="relative w-full" style={{
                  paddingBottom: '177.78%'
                }}>
                    <iframe className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg" src="https://www.youtube.com/embed/YM_lTbazDlc" title="Tutorial de montagem - Parte 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative w-full" style={{
                  paddingBottom: '177.78%'
                }}>
                    <iframe className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg" src="https://www.youtube.com/embed/vs3VappJU2o" title="Tutorial de montagem - Parte 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-primary text-white hover:bg-primary/90" />
              <CarouselNext className="right-0 bg-primary text-white hover:bg-primary/90" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-12 px-4 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-foreground text-3xl sm:text-4xl font-bold text-center mb-12">O Que Os Pais Estão Dizendo Sobre Nós:</h2>
          <div className="max-w-md mx-auto">
            <InfiniteCarousel items={testimonialVideos} />
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="bg-primary py-12 px-4 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-accent text-3xl sm:text-4xl font-bold text-center mb-4">
            BÔNUS ESPECIAIS
          </h2>
          <p className="text-white text-lg sm:text-xl text-center mb-12">
            Os bônus são gratuitos para quem adquirir o kit de personagens hoje!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
              <img src={whatsappLogo} alt="WhatsApp" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold text-center mb-2">
                ✓ SUPORTE COMPLETO NO WHATSAPP
              </h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
              <Play className="w-12 h-12 text-accent mb-4 mx-auto" />
              <h3 className="text-white text-xl font-bold text-center mb-2">
                ✓ VÍDEO AULAS ENSINANDO TÉCNICAS DE MONTAGEM
              </h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
              <img src={bonusPuzzles} alt="Kit Quebra Cabeças" className="w-24 h-24 mx-auto mb-4 rounded-lg" />
              <h3 className="text-white text-xl font-bold text-center mb-2">
                ✓ KIT QUEBRA CABEÇAS
              </h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
              <img src={bonusMemory} alt="Kit Jogos da Memória" className="w-24 h-24 mx-auto mb-4 rounded-lg" />
              <h3 className="text-white text-xl font-bold text-center mb-2">
                ✓ KIT JOGOS DA MEMÓRIA
              </h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20 md:col-span-2">
              <img src={bonusBobbie} alt="100 Páginas Bobbie Goods" className="w-24 h-24 mx-auto mb-4 rounded-lg" />
              <h3 className="text-white text-xl font-bold text-center mb-2">
                ✓ 100 PÁGINA BOBBIE GOODS
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer-section" className="bg-background py-12 px-4 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-[0_0_40px_rgba(72,187,120,0.6)] border-4 border-secondary p-8">
            <h2 className="text-foreground text-2xl sm:text-3xl font-bold text-center mb-8">
              Resumo Da Sua Oportunidade De Hoje:
            </h2>
            <div className="space-y-3 mb-8">
              {[" +250 Personagens de Papel Para Recortar", " Moldes Prontos para impressão", " Diversos modelos e personagens", " 30 dias de garantia", " Acesso imediato", " Suporte Completo no WHATSAPP", " Técnicas de Montagem em Vídeo", " Bônus: KIT QUEBRA CABEÇAS", " Bônus: KIT JOGOS DA MEMÓRIA", " Bônus: 100 PÁGINA BOBBIE GOODS"].map((item, index) => <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium text-lg">{item}</p>
                </div>)}
            </div>
            <div className="mb-8 max-w-md mx-auto">
              <img src={productMockup} alt="Kit completo de personagens" className="w-full h-auto rounded-xl shadow-lg" />
            </div>
            <p className="text-destructive text-2xl sm:text-3xl font-bold text-center mb-2">
              DE <span className="line-through">R$97</span>
            </p>
            <p className="text-secondary text-3xl sm:text-4xl font-bold text-center mb-6">
              APROVEITE POR R$24,90<br />
              <span className="text-3xl">ou 5x R$4,97</span>
            </p>
            <div className="flex justify-center">
              <Button variant="cta" size="xl" className="w-full max-w-md" onClick={() => window.open('https://go.pepperpay.com.br/ab7ih', '_blank')}>
                BAIXAR MEUS PERSONAGENS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-muted py-12 px-4 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <img src={guaranteeSeal} alt="Selo de garantia de 30 dias" className="w-32 h-32 mx-auto mb-6" />
          <h2 className="text-foreground text-2xl sm:text-3xl font-bold mb-4">
            GARANTIA INCONDICIONAL
          </h2>
          <p className="text-foreground leading-relaxed max-w-2xl mx-auto">
            Você está sob proteção do <strong>Código de Defesa do Consumidor</strong> – LEI Nº 8.078, de 11 de setembro de 1990.
            <br /><br />
            Se por algum motivo você achar que não é para você ou não se adaptar, basta entrar em contato dentro do prazo de 30 dias e solicitar o reembolso total do valor investido.
          </p>
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <section className="bg-background py-12 px-4 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-[0_0_40px_rgba(37,211,102,0.6)] border-4 border-[#25D366] p-8 sm:p-12">
            <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
              Ficou com dúvida? Entre em contato agora mesmo e esclareça todas elas!
            </h2>
            <div className="flex flex-col items-center gap-6">
              <img src={whatsappIcon} alt="WhatsApp" className="w-32 h-32 sm:w-40 sm:h-40" />
              <Button variant="cta" size="xl" className="w-full max-w-md" onClick={() => window.open('https://wa.me/5548992050264', '_blank')}>
                ENTRAR EM CONTATO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-12 px-4 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-foreground text-3xl sm:text-4xl font-bold text-center mb-12">
            Dúvidas Frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card rounded-lg px-6 border-2 border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {" "}{" "}Como vou receber?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Você receberá um link para download diretamente no email utilizado na compra. Só clicar e pronto!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card rounded-lg px-6 border-2 border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Vou precisar de alguma ferramenta especial?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Você vai precisar imprimir em papel (pode ser sulfite ou mais firme, como cartolina, vergê ou papel foto), de uma tesoura e cola (bastão ou liquida).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card rounded-lg px-6 border-2 border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Posso imprimir quantas vezes quiser?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Podem sim! Não há limite em quantas vezes os personagens podem ser impressos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card rounded-lg px-6 border-2 border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Posso usar em sala de aula?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Com certeza! A montagem dos personagens mais famosos da televisão de uma forma interativa e divertida como essa é uma ótima atividade para a sala de aula!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card rounded-lg px-6 border-2 border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Os brinquedos são só para crianças pequenas?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Não. Existem graus de dificuldade que agradam desde crianças de 3 anos até maiores de 10 anos. Até adultos gostam de montar junto. Além de servir muito para colecionadores ou admiradores dos personagens!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card rounded-lg px-6 border-2 border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Quanto tempo demora para receber?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                O envio é imediato após o pagamento. Após a confirmação da cobrança o link de download chega instantaneamente no email usado na compra.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-background text-sm">
            Faça Seu Brinquedo© - Todos Direitos reservados 2025
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;