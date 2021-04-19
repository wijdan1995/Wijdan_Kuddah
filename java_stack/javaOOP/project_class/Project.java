package java_stack.javaOOP.project_class;

public class Project {
    private String name, description;
    private double initialCost = 0;
    private static String defaultName = "Default NAME";
    private static String defaultDesc = "DEfault DesC";

    // constructor methods
    public Project() {
        name = defaultName;
        description = defaultDesc;
    }

    public Project(String name) {
        this.name = name;
        this.description = defaultDesc;
    }

    public Project(String name, String description, double cost) {
        this.name = name;
        this.description = description;
        this.initialCost = cost;
    }

    // Setter
    public void setName(String name){
        this.name = name;
    }
    public void setDescription(String description){
        this.description = description;
    }

    // Getter
    public String getName(){
        return name;
    }
    public String getDescription(){
        return description;
    }
    public double getCost() { 
        return initialCost; 
    }


    public String elevatorPitch(){
        return name + "("+ initialCost +")"+ ": " + description;
    }
}
