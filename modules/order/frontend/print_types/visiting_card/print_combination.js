const PrintData = {
  "type":{
    "visiting-card": {
      "label": "Visiting Card",
      "coat": ["c-1", "c-2"],
      "quantity": ["q-2", "q-3", "q-4"],
      "paper_quality": ["pq-2", "pq-3"]
    },
    "visiting-card-vertical": {
      "label": "Vertical Visiting Card",
      "coat": ["c-1", "c-2"],
      "quantity": ["q-2", "q-3"],
      "paper_quality": ["pq-2", "pq-3"]
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
