import { Button } from "@/components/ui/button";
import { InfiniteCarousel } from "@/components/InfiniteCarousel";
import { BenefitCard } from "@/components/BenefitCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Smartphone, Sparkles, Hand, Heart, Check, MessageCircle, Play } from "lucide-react";

import heroMockup from "@/assets/hero-mockup.jpg";
import character1 from "@/assets/character-1.jpg";
import character2 from "@/assets/character-2.jpg";
import character3 from "@/assets/character-3.jpg";
import character4 from "@/assets/character-4.jpg";
import tutorial1 from "@/assets/tutorial-1.jpg";
import tutorial2 from "@/assets/tutorial-2.jpg";
import tutorial3 from "@/assets/tutorial-3.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import guaranteeSeal from "@/assets/guarantee-seal.png";
import offerMockup from "@/assets/offer-mockup.jpg";

const Index = () => {
  const today = new Date();
  const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear().toString().slice(-2)}`;

  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const characterImages = [
    <img src={character1} alt="Super-herói de papel" className="w-full h-auto rounded-xl shadow-md" />,
    <img src={character2} alt="Princesa de papel" className="w-full h-auto rounded-xl shadow-md" />,
    <img src={character3} alt="Animalzinho de papel" className="w-full h-auto rounded-xl shadow-md" />,
    <img src={character4} alt="Dinossauro de papel" className="w-full h-auto rounded-xl shadow-md" />,
  ];

  const tutorialImages = [
    <img src={tutorial1} alt="Passo 1: Recortar" className="w-full h-auto rounded-xl shadow-md object-cover" />,
    <img src={tutorial2} alt="Passo 2: Colar" className="w-full h-auto rounded-xl shadow-md object-cover" />,
    <img src={tutorial3} alt="Passo 3: Brincar" className="w-full h-auto rounded-xl shadow-md object-cover" />,
  ];

  const testimonialImages = [
    <div className="relative h-full">
      <img src={testimonial1} alt="Depoimento mãe feliz" className="w-full h-full object-cover rounded-xl shadow-md" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
        <p className="text-white text-sm font-medium">⭐⭐⭐⭐⭐</p>
        <p className="text-white text-sm">"Meus filhos adoraram! Ficaram horas brincando."</p>
        <p className="text-white/80 text-xs">- Marina S.</p>
      </div>
    </div>,
    <div className="relative h-full">
      <img src={testimonial2} alt="Depoimento pai feliz" className="w-full h-full object-cover rounded-xl shadow-md" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
        <p className="text-white text-sm font-medium">⭐⭐⭐⭐⭐</p>
        <p className="text-white text-sm">"Finalmente meu filho deixou o celular de lado!"</p>
        <p className="text-white/80 text-xs">- Carlos R.</p>
      </div>
    </div>,
    <div className="relative h-full">
      <img src={testimonial3} alt="Depoimento avó feliz" className="w-full h-full object-cover rounded-xl shadow-md" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
        <p className="text-white text-sm font-medium">⭐⭐⭐⭐⭐</p>
        <p className="text-white text-sm">"Perfeito para brincar com meus netos!"</p>
        <p className="text-white/80 text-xs">- Rosa M.</p>
      </div>
    </div>,
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Discount Bar */}
      <div className="bg-destructive py-3 px-4 text-center sticky top-0 z-50 shadow-md">
        <p className="text-accent font-bold text-sm sm:text-base">
          Desconto de 75% apenas hoje {formattedDate}
        </p>
      </div>

      {/* Hero Section */}
      <section className="bg-primary py-12 px-4 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 leading-tight">
            +250 Moldes para seu filho fazer o próprio personagem de papel e ficar longe das telas
          </h1>
          <div className="mb-8 max-w-2xl mx-auto">
            <img 
              src={heroMockup} 
              alt="Kit de personagens de papel para imprimir" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          <div className="flex justify-center">
            <Button 
              variant="cta" 
              size="xl" 
              onClick={scrollToOffer}
              className="w-full max-w-md"
            >
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
          <h2 className="text-foreground text-3xl sm:text-4xl font-bold text-center mb-12">
            O Que Seu Filho(a) Vai Desenvolver?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <BenefitCard
              icon={Smartphone}
              title="Substituir o vício em telas"
              description="Oferecendo uma alternativa saudável e divertida ao tempo excessivo em dispositivos eletrônicos."
            />
            <BenefitCard
              icon={Sparkles}
              title="Estimular a criatividade"
              description="Desenvolver a imaginação e capacidade criativa através de atividades lúdicas e educativas."
            />
            <BenefitCard
              icon={Hand}
              title="Desenvolver coordenação motora"
              description="Melhorando as habilidades motoras finas através de recortar, dobrar e montar os brinquedos."
            />
            <BenefitCard
              icon={Heart}
              title="Aumentar a aproximação com os Pais"
              description="Criar momentos únicos de conexão familiar através de atividades compartilhadas."
            />
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="bg-background py-12 px-4 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-foreground text-3xl sm:text-4xl font-bold text-center mb-12">
            A Montagem é Simples! Veja Como Funciona.
          </h2>
          <div className="max-w-sm mx-auto">
            <InfiniteCarousel items={tutorialImages} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-12 px-4 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-foreground text-3xl sm:text-4xl font-bold text-center mb-12">
            O Que Os Pais Estão Dizendo
          </h2>
          <div className="max-w-sm mx-auto h-[500px]">
            <InfiniteCarousel items={testimonialImages} className="h-full" />
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
              <MessageCircle className="w-12 h-12 text-accent mb-4 mx-auto" />
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
              {[
                "✓ +250 Personagens de Papel Para Recortar",
                "✓ Moldes Prontos para impressão",
                "✓ Diversos modelos e personagens",
                "✓ 30 dias de garantia",
                "✓ Acesso imediato",
                "✓ Suporte Completo no WHATSAPP",
                "✓ Técnicas de Montagem em Vídeo"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium text-lg">{item}</p>
                </div>
              ))}
            </div>
            <div className="mb-8 max-w-md mx-auto">
              <img 
                src={offerMockup} 
                alt="Kit completo de personagens" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <p className="text-secondary text-3xl sm:text-4xl font-bold text-center mb-6">
              APROVEITE POR R$24,90<br />
              <span className="text-xl">ou 5x R$4,97</span>
            </p>
            <div className="flex justify-center">
              <Button 
                variant="cta" 
                size="xl"
                className="w-full max-w-md"
              >
                BAIXAR MEUS PERSONAGENS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-muted py-12 px-4 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src={guaranteeSeal} 
            alt="Selo de garantia de 30 dias" 
            className="w-32 h-32 mx-auto mb-6"
          />
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

      {/* FAQ Section */}
      <section className="bg-background py-12 px-4 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-foreground text-3xl sm:text-4xl font-bold text-center mb-12">
            Dúvidas Frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card rounded-lg px-6 border-2 border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Como vou receber?
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
    </div>
  );
};

export default Index;
