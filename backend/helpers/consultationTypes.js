exports.getConsultationTypeByCategory = (type) => {
  const types = {
    individual: {
      1: "Konsultacja psychoterapeutyczna (50 min)",
      2: "Konsultacja dot. uzależnienia (50 min)",
      10: "Konsultacja indywidualna ENG (50 min)",
      14: "Konsultacja okołoporodowa (50 min)",
      15: "Konsultacja okołoporodowa ENG (50 min)",
      16: "Konsultacja rodzinna",
      17: "Konsultacja rodzinna ENG",
      18: "Konsultacja do grupy",
    },
    pair: {
      3: "Konsultacja pary (50 min)",
      4: "Konsultacja pary (75 min)",
      5: "Konsultacja pary (90 min)",
      6: "Konsultacja pary u dwóch terapeutów (50 min)",
      11: "Konsultacja pary ENG (50 min)",
      12: "Konsultacja pary ENG (75 min)",
      13: "Konsultacja pary ENG (90 min)",
    },
    psychiatric: {
      7: "Konsultacja psychiatryczna pierwsza (50 min)",
      8: "Konsultacja psychiatryczna kolejna (30 min)",
      9: "Wystawienie recepty/zaświadczenia poza wizytą",
    },
  };

  return types[type];
};