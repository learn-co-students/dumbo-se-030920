class EnrollmentsController < ApplicationController

    def new 
        @enrollment = Enrollment.new
    end

    def create
        @enrollment = Enrollment.create(enrollments_params)
        redirect_to student_path(@enrollment.student)
    end

    def destroy
        @enrollment = Enrollment.find(params[:id])
        # student = @enrollment.student
        @enrollment.destroy()
        byebug
        redirect_to student_path(@enrollment.student)
    end

    private 

    def enrollments_params
        params.require(:enrollment).permit(:student_id, :course_id)
    end

end
