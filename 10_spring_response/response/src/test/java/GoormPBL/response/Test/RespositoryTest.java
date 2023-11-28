package GoormPBL.response.Test;

import GoormPBL.response.Entity.Student;
import GoormPBL.response.Repository.StudentRepository;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assert;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.event.annotation.AfterTestMethod;

import java.util.HashSet;
import java.util.List;

@Slf4j
@SpringBootTest
public class RespositoryTest {
    private final StudentRepository stuRes = new StudentRepository();
    @AfterTestMethod
    public void Testinit()
    {
        stuRes.clear();
    }
    @Test
    public void getAll()
    {
        Student stu2 = new Student("kim", 1234L);
        Student stu1 = new Student("song", 1123L);
        Student stu3 = new Student("song", 3L);
        Student stu4 = new Student("song", 1123L);
        Student stu5 = new Student("song", 13L);
        Student stu6 = new Student("song", 1223L);
        Student stu7 = new Student("song", 12L);
        stuRes.add(stu1);
        stuRes.add(stu2);
        stuRes.add(stu3);
        stuRes.add(stu4);
        stuRes.add(stu5);
        stuRes.add(stu6);
        stuRes.add(stu7);
        List<Student> all = stuRes.getAll();
        Assertions.assertThat(all.size()).isEqualTo(6);
        for(Student stu : all)
            log.info(stu.getName() + " " +  stu.getGrade());
    }
    @Test
    public void get()
    {
        Student stu1 = new Student("song", 123L);
        Student stu2 = new Student("kim", 1234L);
        stuRes.add(stu1);
        stuRes.add(stu2);
        Student student = stuRes.get(123L);
        Assertions.assertThat(student).isEqualTo(stu1);
    }
}
