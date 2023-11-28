package GoormPBL.response.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
@Getter
public class Student implements Comparable<Student>{
    private String name;
    private Long grade;
    @Override
    public int compareTo(Student o) {
        if(this.grade < o.getGrade())
            return -1;
        else
            return 1;
    }
}
