import { SelectItemGroup } from "primeng/api";

export class OptionsBusinessSegment{
    public static defaultBusinessSegment: SelectItemGroup[] = [
          {
            label: 'Tecnologia da Informação',
            items: [
              { label: 'Desenvolvimento de Software', value: 'software_development' },
              { label: 'Serviços de TI', value: 'it_services' },
              { label: 'Infraestrutura de TI', value: 'it_infrastructure' },
              { label: 'Segurança da Informação', value: 'information_security' },
              { label: 'Telecomunicações', value: 'telecommunications' }
            ]
          },
          {
            label: 'Varejo',
            items: [
              { label: 'Moda e Vestuário', value: 'fashion_apparel' },
              { label: 'Eletrônicos e Eletrodomésticos', value: 'electronics_appliances' },
              { label: 'Alimentação', value: 'food' },
              { label: 'Beleza e Cuidados Pessoais', value: 'beauty_personal_care' },
              { label: 'Livrarias e Papelarias', value: 'books_stationery' }
            ]
          },
          {
            label: 'Serviços Financeiros',
            items: [
              { label: 'Bancos', value: 'banks' },
              { label: 'Seguros', value: 'insurance' },
              { label: 'Investimentos', value: 'investments' },
              { label: 'Consultoria Financeira', value: 'financial_consulting' },
              { label: 'Pagamentos e Transferências', value: 'payments_transfers' }
            ]
          },
          {
            label: 'Saúde',
            items: [
              { label: 'Hospitais e Clínicas', value: 'hospitals_clinics' },
              { label: 'Farmácias e Drogarias', value: 'pharmacies_drugstores' },
              { label: 'Produtos Médicos e Equipamentos', value: 'medical_products_equipment' },
              { label: 'Serviços de Saúde', value: 'health_services' },
              { label: 'Bem-estar e Fitness', value: 'wellness_fitness' }
            ]
          },
          {
            label: 'Energia',
            items: [
              { label: 'Geração de Energia Elétrica', value: 'electricity_generation' },
              { label: 'Distribuição de Energia Elétrica', value: 'electricity_distribution' },
              { label: 'Energias Renováveis', value: 'renewable_energy' },
              { label: 'Petróleo e Gás', value: 'oil_gas' },
              { label: 'Serviços de Energia', value: 'energy_services' }
            ]
          },
          {
            label: 'Indústria Automotiva',
            items: [
              { label: 'Fabricação de Veículos', value: 'vehicle_manufacturing' },
              { label: 'Peças e Componentes', value: 'parts_components' },
              { label: 'Concessionárias e Revendas', value: 'dealerships_sales' },
              { label: 'Serviços Automotivos', value: 'automotive_services' },
              { label: 'Locação e Compartilhamento de Veículos', value: 'car_rental_sharing' }
            ]
          },
          {
            label: 'Educação',
            items: [
                { label: 'Educação Básica', value: 'basic_education' },
                { label: 'Ensino Superior', value: 'higher_education' },
                { label: 'Cursos e Treinamentos Profissionais', value: 'professional_courses_training' },
                { label: 'E-learning e Plataformas de Ensino Online', value: 'e_learning_online_education' },
                { label: 'Editoras e Materiais Educacionais', value: 'publishing_educational_materials' }
              ]
          },
          {
            label: 'Agricultura e Alimentação',
            items: [
              { label: 'Agricultura e Pecuária', value: 'agriculture_livestock' },
              { label: 'Alimentos Processados', value: 'processed_foods' },
              { label: 'Bebidas', value: 'beverages' },
              { label: 'Distribuição e Logística de Alimentos', value: 'food_distribution_logistics' },
              { label: 'Restaurantes e Serviços de Alimentação', value: 'restaurants_food_services' }
            ]
          },
          {
            label: 'Construção e Engenharia',
            items: [
              { label: 'Construtoras e Empreiteiras', value: 'construction_contractors' },
              { label: 'Arquitetura e Design de Interiores', value: 'architecture_interior_design' },
              { label: 'Engenharia Civil e Estrutural', value: 'civil_structural_engineering' },
              { label: 'Materiais de Construção', value: 'building_materials' },
              { label: 'Serviços de Construção e Manutenção', value: 'construction_maintenance_services' }
            ]
          },
          {
            label: 'Turismo e Hospitalidade',
            items: [
              { label: 'Hotéis e Hospedagem', value: 'hotels_accommodation' },
              { label: 'Agências de Viagens e Turismo', value: 'travel_agencies_tourism' },
              { label: 'Restaurantes e Bares', value: 'restaurants_bars' },
              { label: 'Operadoras de Turismo', value: 'tour_operators' },
              { label: 'Serviços de Eventos e Entretenimento', value: 'event_services_entertainment' }
            ]
          },
          {
            label: 'Consultoria e Assessoria',
            items: [
              { label: 'Consultoria Empresarial', value: 'business_consulting' },
              { label: 'Consultoria em Recursos Humanos', value: 'human_resources_consulting' },
              { label: 'Consultoria Jurídica', value: 'legal_consulting' },
              { label: 'Consultoria em Marketing e Publicidade', value: 'marketing_advertising_consulting' },
              { label: 'Consultoria Financeira e Contábil', value: 'financial_accounting_consulting' }
            ]
          },
          {
            label: 'Indústria Química',
            items: [
              { label: 'Produtos Químicos Básicos', value: 'basic_chemicals' },
              { label: 'Farmacêuticos e Cosméticos', value: 'pharmaceuticals_cosmetics' },
              { label: 'Químicos para Agricultura', value: 'agricultural_chemicals' },
              { label: 'Materiais Plásticos e Polímeros', value: 'plastics_polymers' },
              { label: 'Químicos Especiais e Reagentes', value: 'specialty_chemicals_reagents' }
            ]
          },
          {
            label: 'Entretenimento e Mídia',
            items: [
              { label: 'Cinema e Produção Audiovisual', value: 'film_audiovisual_production' },
              { label: 'Música e Entretenimento ao Vivo', value: 'music_live_entertainment' },
              { label: 'Jornais, Revistas e Editoras', value: 'newspapers_magazines_publishing' },
              { label: 'Radiodifusão e Televisão', value: 'broadcasting_television' },
              { label: 'Jogos e Entretenimento Digital', value: 'games_digital_entertainment' }
            ]
          },
          {
            label: 'Transporte e Logística',
            items: [
              { label: 'Transporte Rodoviário', value: 'road_transportation' },
              { label: 'Transporte Marítimo e Portos', value: 'maritime_transportation_ports' },
              { label: 'Transporte Aéreo', value: 'air_transportation' },
              { label: 'Armazenagem e Distribuição', value: 'warehousing_distribution' },
              { label: 'Logística Integrada', value: 'integrated_logistics' }
            ]
          },
          {
            label: 'Imobiliária e Construção Civil',
            items: [
              { label: 'Corretoras e Imobiliárias', value: 'real_estate_agencies' },
              { label: 'Desenvolvimento Imobiliário', value: 'real_estate_development' },
              { label: 'Gestão de Propriedades', value: 'property_management' },
              { label: 'Engenharia e Construção Civil', value: 'civil_engineering_construction' },
              { label: 'Serviços de Avaliação e Consultoria Imobiliária', value: 'real_estate_appraisal_consulting' }
            ]
          }
    ]
}