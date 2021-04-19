package java_stack.javaOOP.project_class;

public class ProjectTest {
    public static void main(String[] args) {
        Project proj1 = new Project();
        System.out.println(proj1.elevatorPitch());
        Project proj2 = new Project("Wijdan");
        System.out.println(proj2.elevatorPitch());
        Project proj3 = new Project("Joj", "Some dec", 20.00);
        System.out.println(proj3.elevatorPitch());

        proj2.setDescription("hiiiiiiii");
        System.out.println(proj2.elevatorPitch());
        proj2.setName("Changed name ");
        System.out.println(proj2.getName() + proj2.getDescription());

    }
}
