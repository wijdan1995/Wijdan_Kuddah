package java_stack.javaOOP.project_class;

import java.util.ArrayList;

public class Portfolio {
    public ArrayList<Project> Projects;
    public Portfolio() {
        this.Projects = new ArrayList<Project>();
    }
    public void AddToPortfolio(Project p) {
        Projects.add(p);
    }
    public String getPortfolio() {
        return Projects.toString();
    }
    public void showPortfolio() {
        double total = 0;
        for (Project p : Projects) {
            total += p.getCost();
            System.out.println(p.elevatorPitch());
        }
        System.out.println(String.format("Total Cost: %f", total));

    }
}
