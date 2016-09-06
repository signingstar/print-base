const PrintData = {
  "type":{
    "2-fold": {
      "label": "2-fold Broucher",
      "coat": ["c-1", "c-2"],
      "quantity": ["q-2", "q-3", "q-4"],
      "paper_quality": ["pq-2", "pq-3"],
      "fold": ["f-1"],
    },
    "3-fold": {
      "label": "3-fold Broucher",
      "coat": ["c-1", "c-2"],
      "quantity": ["q-2", "q-3"],
      "paper_quality": ["pq-2", "pq-3"],
      "fold": ["f-2"],
    },
    "4-fold": {
      "label": "4-fold Broucher",
      "coat": ["c-1", "c-2"],
      "quantity": ["q-2", "q-3"],
      "paper_quality": ["pq-2", "pq-3"],
      "fold": ["f-1"],
    }
  },
  "fold": {
    "f-1": {
      "label": "2-fold"
    },
    "f-2": {
      "label": "3-fold"
    },
    "f-3": {
      "label": "4-fold"
    }
  },

  "paper_quality": {
    "pq-1": {
      "label": "200gsm"
    },
    "pq-2": {
      "label": "250gsm"
    },
    "pq-3": {
      "label": "300gsm"
    }
  },

  "coat": {
    "c-1": {
      "label": "Gloss"
    },
    "c-2": {
      "label": "UV coating"
    },
    "c-3": {
      "label": "Velvet"
    },
    "c-4": {
      "label": "Matt"
    },
    "c-5": {
      "label": "3D"
    }
  },

  "quantity": {
    "q-2": {
      "label": "10 - 50",
    },
    "q-3": {
      "label": "50 - 500"
    },
    "q-4": {
      "label": "500 - 2000"
    }
  }
}

export default PrintData;
