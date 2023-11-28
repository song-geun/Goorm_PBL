package GoormPBL.response.Service;

import GoormPBL.response.Entity.Student;
import lombok.Getter;

import java.util.HashSet;
import java.util.List;

public interface StudentService {

    public void addStudent(String name, Long grade);
    public List<Student> getAll();
    public Student getGradeStudent(Long grade);
    public void clear();
}
