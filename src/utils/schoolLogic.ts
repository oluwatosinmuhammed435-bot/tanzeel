export interface ClassItem {
  code: string;
  name: string;
  stageId: 'early-years' | 'nursery' | 'primary';
  stageName: string;
  stageLabel?: string;
  stepNumber: string;
}

export interface AcademicStage {
  id: 'early-years' | 'nursery' | 'primary';
  number: string;
  title: string;
  badgeText: string;
  classes: string[];
  description: string;
  focusAreas: string[];
}

export interface WhyChooseUsPillar {
  number: string;
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  elaboration: string;
}

export interface ContactFormInput {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

export const SCHOOL_BRAND = {
  name: 'AT-TANZEEL SUCCESS ACADEMY',
  displayName: 'At-Tanzeel Success Academy',
  shortCode: 'A.S.A',
  motto: 'Faith, Knowledge and Work',
  status: 'ADMISSION IS IN PROGRESS',
  statusSentence: 'Admission is currently in progress.',
  address: 'Ore-Ofe Street, Jakan, Agbowo, Ibadan',
  fullAddress: 'Ore-Ofe Street, Jakan, Agbowo, Ibadan, Nigeria',
  addressLines: ['Ore-Ofe Street,', 'Jakan,', 'Agbowo,', 'Ibadan'],
  phones: ['08060053097', '08119848385'] as const,
  whatsappIntlPhone: '2348060053097',
  closingCallout:
    'Your child is your future. Create a promising one today by enrolling them at AT-TANZEEL SUCCESS ACADEMY!',
};

export const ACADEMIC_STAGES: AcademicStage[] = [
  {
    id: 'early-years',
    number: '01',
    title: 'EARLY YEARS',
    badgeText: 'KG 1 & KG 2',
    classes: ['KG 1', 'KG 2'],
    description:
      'A warm, structured introduction to school life in a safe, nurturing learning environment guided by experienced and passionate teachers.',
    focusAreas: [
      'Safe, welcoming classroom transition for young learners',
      'Foundational literacy, numeracy, and positive learning habits',
      'Early moral guidance and courteous personal conduct',
    ],
  },
  {
    id: 'nursery',
    number: '02',
    title: 'NURSERY',
    badgeText: 'Nursery 1 & Nursery 2',
    classes: ['Nursery 1', 'Nursery 2'],
    description:
      'Building confidence in reading, writing, numeracy, and moral character as pupils prepare steadily for primary education.',
    focusAreas: [
      'Structured reading, writing, and number readiness',
      'Close individual attention from passionate teachers',
      'Balanced moral and academic foundation',
    ],
  },
  {
    id: 'primary',
    number: '03',
    title: 'PRIMARY',
    badgeText: 'Basic 1 to 5',
    classes: ['Basic 1', 'Basic 2', 'Basic 3', 'Basic 4', 'Basic 5'],
    description:
      'Comprehensive primary education uniting academic rigour with sound moral upbringing to prepare pupils for lifelong learning and future success.',
    focusAreas: [
      'Progressive academic mastery from Basic 1 through Basic 5',
      'Strong emphasis on both moral and academic excellence',
      'Affordable and quality education for families in Ibadan',
    ],
  },
];

export const ALL_SCHOOL_CLASSES: ClassItem[] = [
  { code: 'KG1', name: 'KG 1', stageId: 'early-years', stageName: 'Early Years', stageLabel: 'Early Years', stepNumber: '01' },
  { code: 'KG2', name: 'KG 2', stageId: 'early-years', stageName: 'Early Years', stageLabel: 'Early Years', stepNumber: '02' },
  { code: 'NUR1', name: 'Nursery 1', stageId: 'nursery', stageName: 'Nursery', stageLabel: 'Nursery', stepNumber: '03' },
  { code: 'NUR2', name: 'Nursery 2', stageId: 'nursery', stageName: 'Nursery', stageLabel: 'Nursery', stepNumber: '04' },
  { code: 'BAS1', name: 'Basic 1', stageId: 'primary', stageName: 'Primary', stageLabel: 'Primary', stepNumber: '05' },
  { code: 'BAS2', name: 'Basic 2', stageId: 'primary', stageName: 'Primary', stageLabel: 'Primary', stepNumber: '06' },
  { code: 'BAS3', name: 'Basic 3', stageId: 'primary', stageName: 'Primary', stageLabel: 'Primary', stepNumber: '07' },
  { code: 'BAS4', name: 'Basic 4', stageId: 'primary', stageName: 'Primary', stageLabel: 'Primary', stepNumber: '08' },
  { code: 'BAS5', name: 'Basic 5', stageId: 'primary', stageName: 'Primary', stageLabel: 'Primary', stepNumber: '09' },
];

export const WHY_CHOOSE_US_PILLARS: WhyChooseUsPillar[] = [
  {
    number: '01',
    id: 'safe-environment',
    title: 'SAFE, NURTURING LEARNING ENVIRONMENT',
    shortTitle: 'Safe, Nurturing Learning Environment',
    summary:
      'Children learn best when they feel secure, valued, and supported in a calm, orderly school setting.',
    elaboration:
      'At At-Tanzeel Success Academy on Ore-Ofe Street, Jakan, Agbowo, Ibadan, we maintain a welcoming, well-supervised environment where pupils from KG 1 through Basic 5 can focus on learning and personal growth with peace of mind.',
  },
  {
    number: '02',
    id: 'experienced-teachers',
    title: 'EXPERIENCED AND PASSIONATE TEACHERS',
    shortTitle: 'Experienced and Passionate Teachers',
    summary:
      'Dedicated educators who bring patience, skill, and genuine commitment to every classroom.',
    elaboration:
      'Our teachers combine classroom experience with a heartfelt passion for teaching children. They guide each pupil attentively across Early Years, Nursery, and Primary levels so every child progresses with confidence.',
  },
  {
    number: '03',
    id: 'moral-academic-excellence',
    title: 'MORAL AND ACADEMIC EXCELLENCE',
    shortTitle: 'Moral and Academic Excellence',
    summary:
      'True education develops both a sharp intellect and upright character.',
    elaboration:
      'We place equal priority on strong academic performance and sound moral upbringing. Pupils are taught discipline, respect, honesty, and diligence alongside their daily classroom studies.',
  },
  {
    number: '04',
    id: 'affordable-quality-education',
    title: 'AFFORDABLE AND QUALITY EDUCATION',
    shortTitle: 'Affordable and Quality Education',
    summary:
      'High-standard schooling made accessible for families in our community.',
    elaboration:
      'We believe quality education should be within reach of committed parents. At-Tanzeel Success Academy delivers dependable educational value at an affordable cost for families in Agbowo, Jakan, and across Ibadan.',
  },
];

export function buildWhatsAppEnquiryUrl(customMessage?: string): string {
  const defaultText =
    'Hello At-Tanzeel Success Academy, I would like to make an enquiry about admission into your school at Ore-Ofe Street, Jakan, Agbowo, Ibadan.';
  const message = (customMessage && customMessage.trim()) ? customMessage.trim() : defaultText;
  return `https://wa.me/${SCHOOL_BRAND.whatsappIntlPhone}?text=${encodeURIComponent(message)}`;
}

export function validateContactForm(input: ContactFormInput): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};

  if (!input.fullName || input.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  const cleanedPhone = (input.phoneNumber || '').replace(/[\s\-()]/g, '');
  const phoneRegex = /^(\+?234|0)?[789][01]\d{8}$|^\+?\d{8,15}$/;
  if (!cleanedPhone || !phoneRegex.test(cleanedPhone)) {
    errors.phoneNumber = 'Please enter a valid phone number (e.g. 08060053097).';
  }

  const email = (input.emailAddress || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.emailAddress = 'Please enter a valid email address.';
  }

  if (!input.message || input.message.trim().length < 5) {
    errors.message = 'Please enter your enquiry message.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export const PAGE_SEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'AT-TANZEEL SUCCESS ACADEMY | Quality Education in Ibadan',
    description:
      'At-Tanzeel Success Academy at Ore-Ofe Street, Jakan, Agbowo, Ibadan offers affordable and quality education across KG 1 & 2, Nursery 1 & 2, and Basic 1 to 5. Admission is in progress.',
  },
  '/about': {
    title: 'About Us | AT-TANZEEL SUCCESS ACADEMY, Ibadan',
    description:
      'Learn about At-Tanzeel Success Academy at Ore-Ofe Street, Jakan, Agbowo, Ibadan — committed to safe learning, moral development, academic excellence, and quality education.',
  },
  '/academics': {
    title: 'Academics & Classes | AT-TANZEEL SUCCESS ACADEMY, Ibadan',
    description:
      'Explore our academic stages at At-Tanzeel Success Academy, Ibadan: Early Years (KG 1 & KG 2), Nursery (Nursery 1 & Nursery 2), and Primary (Basic 1 to 5).',
  },
  '/admissions': {
    title: 'Admissions | AT-TANZEEL SUCCESS ACADEMY, Ibadan',
    description:
      'Admission is in progress at At-Tanzeel Success Academy, Ore-Ofe Street, Jakan, Agbowo, Ibadan into KG 1 & 2, Nursery 1 & 2, and Basic 1 to 5. Call 08060053097 or 08119848385.',
  },
  '/why-choose-us': {
    title: 'Why Choose Us | AT-TANZEEL SUCCESS ACADEMY, Ibadan',
    description:
      'Discover why families choose At-Tanzeel Success Academy: a safe, nurturing learning environment, experienced and passionate teachers, moral and academic excellence, and affordable quality education.',
  },
  '/contact': {
    title: 'Contact Us | AT-TANZEEL SUCCESS ACADEMY, Ibadan',
    description:
      'Contact At-Tanzeel Success Academy at Ore-Ofe Street, Jakan, Agbowo, Ibadan. Call or WhatsApp 08060053097 or 08119848385 for admission enquiries.',
  },
};
