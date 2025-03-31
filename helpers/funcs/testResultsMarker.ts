const testResultsMarker = (item: string): string[] => {
  switch (item) {
    case 'childrenPsy':
      return ['detskij-psiholog', 'perinatalnyj-psiholog', 'pedagog-psiholog', 'logoped']
    case 'psyCons':
      return [
        'psiholog-konsultant',
        'art-terapevt',
        'geshtalt-terapevt',
        'psihoanaliz-i-psihologicheskaya-psihoterapiya'
      ]
    case 'organization':
      return ['psiholog-biznes-konsultant.-kouch', 'korporativnyj-psiholog', 'mediator']
    case 'psySomatic':
      return ['psihosomatika-i-telesnaya-psihoterapiya', 'kognitivno-povedencheskij-psihoterapevt']
    default:
      return ['psiholog-konsultant']
  }
}

export default testResultsMarker
