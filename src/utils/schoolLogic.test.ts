import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SCHOOL_BRAND,
  ACADEMIC_STAGES,
  ALL_SCHOOL_CLASSES,
  WHY_CHOOSE_US_PILLARS,
  buildWhatsAppEnquiryUrl,
  validateContactForm,
} from './schoolLogic.ts';

test('SCHOOL_BRAND matches exact flyer facts', () => {
  assert.equal(SCHOOL_BRAND.name, 'AT-TANZEEL SUCCESS ACADEMY');
  assert.equal(SCHOOL_BRAND.address, 'Ore-Ofe Street, Jakan, Agbowo, Ibadan');
  assert.deepEqual(SCHOOL_BRAND.phones, ['08060053097', '08119848385']);
});

test('ALL_SCHOOL_CLASSES contains all 9 classes across Early Years, Nursery, and Primary', () => {
  assert.equal(ALL_SCHOOL_CLASSES.length, 9);
  assert.equal(ACADEMIC_STAGES.length, 3);
  assert.deepEqual(
    ALL_SCHOOL_CLASSES.map((c) => c.name),
    ['KG 1', 'KG 2', 'Nursery 1', 'Nursery 2', 'Basic 1', 'Basic 2', 'Basic 3', 'Basic 4', 'Basic 5']
  );
});

test('WHY_CHOOSE_US_PILLARS contains the exact four points from the flyer', () => {
  assert.equal(WHY_CHOOSE_US_PILLARS.length, 4);
  assert.deepEqual(
    WHY_CHOOSE_US_PILLARS.map((p) => p.title),
    [
      'SAFE, NURTURING LEARNING ENVIRONMENT',
      'EXPERIENCED AND PASSIONATE TEACHERS',
      'MORAL AND ACADEMIC EXCELLENCE',
      'AFFORDABLE AND QUALITY EDUCATION',
    ]
  );
});

test('buildWhatsAppEnquiryUrl formats valid wa.me link with encoded text', () => {
  const url = buildWhatsAppEnquiryUrl('Hello, I want to enquire about KG 1 admission.');
  assert.ok(url.startsWith('https://wa.me/2348060053097?text='));
  assert.ok(url.includes('KG%201'));
});

test('validateContactForm validates required contact fields', () => {
  const invalid = validateContactForm({
    fullName: '',
    phoneNumber: '12',
    emailAddress: 'not-an-email',
    message: 'Hi',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.phoneNumber);
  assert.ok(invalid.errors.emailAddress);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    fullName: 'Mrs. Adewale',
    phoneNumber: '08060053097',
    emailAddress: 'parent@example.com',
    message: 'I would like to enquire about Basic 2 admission.',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});
