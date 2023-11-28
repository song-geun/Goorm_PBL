package GoormPBL.response.Controller;

import lombok.Getter;

@Getter
public enum ErrorCode {
    Empty(401,400,"name과 grade가 입력되지 않았습니다"),
    NameEmpty(402, 400, "name이 입력되지 않았습니다."),
    gradeEmpty(403, 400, "grade가 입력되지 않았습니다."),

    ;

    private final int error;
    private final int httpErrorcode;
    private final String message;
    ErrorCode(int error, int httpErrorcode, String message) {
        this.error = error;
        this.httpErrorcode = httpErrorcode;
        this.message = message;
    }
}
