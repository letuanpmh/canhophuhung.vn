import SEO from '@/components/SEO'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import LeadForm from '@/components/LeadForm'
export default function Page() {
  return (
    <main>
      <SEO />
      <Hero />
      <Section title="Tổng quan">
        <ul className="grid sm:grid-cols-2 gap-4">
          <li>Chủ đầu tư: Phú Mỹ Hưng</li>
          <li>Vị trí: Thủ Dầu Một, Bình Dương</li>
          <li>Quy mô: (cập nhật)</li>
          <li>Pháp lý: (cập nhật)</li>
        </ul>
      </Section>
      <Section title="Nhận bảng giá & Tài liệu">
        <LeadForm />
      </Section>
    </main>
  )
}
