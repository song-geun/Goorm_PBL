package GoormPBL.response.Test;

import GoormPBL.response.Entity.Student;
import GoormPBL.response.Service.StudentService;
import GoormPBL.response.Service.StudentServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.event.annotation.AfterTestMethod;

import java.util.HashSet;
import java.util.List;

@Slf4j
@SpringBootTest
public class ServiceTest {
    private final StudentService Res = new StudentServiceImpl();

    @AfterTestMethod
    void clear()
    {
        Res.clear();
    }

    @Test
    public void getAll()
    {
        Res.addStudent("kim",1234L);
        Res.addStudent("song" , 1234L);
        List<Student> all = Res.getAll();
        Assertions.assertThat(all.size()).isEqualTo(2);
        for(Student stu : all)
            log.info(stu.getName() + " " +  stu.getGrade());
    }
    @Test
    public void get()
    {
        Res.addStudent("kim",1234L);
        Res.addStudent("song" , 123L);
        Student student = Res.getGradeStudent(123L);
        Assertions.assertThat(student).isEqualTo(new Student("song", 123L));
    }
}
