public class Main {
    public static void main(String[] args) {
        // Affichage simple
        System.out.println("👋 Bonjour, bienvenue dans le monde Java !");

        // Déclaration de variables
        String nom = "Alice";
        int age = 25;

        // Condition
        if (age >= 18) {
            System.out.println(nom + " est majeur(e).");
        } else {
            System.out.println(nom + " est mineur(e).");
        }

        // Boucle for
        System.out.println("🔢 Compte de 1 à 5 :");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Nombre : " + i);
        }
    }
}