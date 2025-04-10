import PageHeader from '@/components/ui/PageHeader';
import HistoryEvents from '@/components/history/HistoryEvents';
import HistoryGallery from '@/components/history/HistoryGallery';
import HistoryArticles from '@/components/history/HistoryArticles';
export const metadata = {
  title: 'История ВОВ - Великая Отечественная Война',
  description: 'Важные события и даты Великой Отечественной Войны. Фотографии и тематические статьи по истории защиты Отечества.',
};
export default function HistoryPage() {
  return (
    <div className="pt-20">
      <PageHeader 
        title="История Великой Отечественной Войны" 
        description="Важные события и даты в простом и интересном формате"
        bgImage="/images/history-header.jpg"
      />
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Ключевые этапы войны</h2>
          <HistoryEvents />
        </div>
      </section>
      <section className="py-16 bg-card">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Фотохроника войны</h2>
          <HistoryGallery />
        </div>
      </section>
    </div>
  );
} 