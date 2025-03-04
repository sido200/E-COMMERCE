import { create } from "zustand";

const usePanierStore = create((set) => ({
  panier: [],
  ajouterAuPanier: (produit) =>
    set((state) => ({
      panier: [...state.panier, produit],
    })),
  retirerDuPanier: (id) =>
    set((state) => ({
      panier: state.panier.filter((item) => item.id !== id),
    })),
  viderPanier: () => set({ panier: [] }),
}));

export default usePanierStore;
