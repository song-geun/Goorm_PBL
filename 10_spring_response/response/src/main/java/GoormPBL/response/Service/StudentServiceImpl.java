package GoormPBL.response.Service;

import GoormPBL.response.Entity.Student;
import GoormPBL.response.Repository.StudentRepository;
import lombok.Getter;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.List;

@Getter
@Repository
public class StudentServiceImpl implements StudentService{
    private final StudentRepository StuRes;
    public StudentServiceImpl(){
        StuRes = new StudentRepository();
    }
    @Override
    public void addStudent(String name, Long grade) {
        Student stu = new Student(name, grade);
        StuRes.add(stu);
    }
    @Override
    public List<Student> getAll() {
        return StuRes.getAll();
    }
    @Override
    public Student getGradeStudent(Long grade) {
        Student stu = StuRes.get(grade);
        return stu;
    }
    @Override
    public void clear() {
        StuRes.clear();
    }
}
