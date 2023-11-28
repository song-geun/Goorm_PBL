package GoormPBL.response.Repository;

import GoormPBL.response.Entity.Student;
import lombok.Getter;

import java.util.HashSet;
import java.util.List;

@Getter
public class StudentRepository extends HashSet<Student> {
    public List<Student> getAll()
    {
        return this.stream().sorted().toList();
    }
    public Student get(Long grade)
    {
        Student result = this.stream().
                filter(o -> o.getGrade().equals(grade)).
                findAny().get();
        return result;
    }

    public void clear()
    {
        this.clear();
    }
}
