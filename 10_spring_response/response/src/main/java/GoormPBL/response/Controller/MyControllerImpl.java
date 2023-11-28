package GoormPBL.response.Controller;

import GoormPBL.response.Entity.Student;
import GoormPBL.response.Service.StudentService;
import GoormPBL.response.Service.StudentServiceImpl;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@RestController
@Getter
@Slf4j
public class MyControllerImpl implements MyController{
    private static final StudentService Stus = new StudentServiceImpl();
    private static final ArrayList<Student> as = new ArrayList<>();
    @Override
    @GetMapping("/student/{name}/{grade}")
    public void save(@PathVariable String grade, @PathVariable String name)
    {
        Stus.addStudent(name,Long.parseLong(grade));
    }
    @Override
    @GetMapping("/students")
    @ResponseBody
    public ApiResponse responseAll() {
        List<Student> all = Stus.getAll();
        return new ApiResponse(200, "OK", as);
    }

    @Override
    @GetMapping("/student/{grade}")
    @ResponseBody
    public ApiResponse responseGet(@PathVariable Long grade) {
        Student gradeStudent = Stus.getGradeStudent(grade);
        as.clear();
        as.add(gradeStudent);
        return new ApiResponse(200, "OK", as);
    }
}
