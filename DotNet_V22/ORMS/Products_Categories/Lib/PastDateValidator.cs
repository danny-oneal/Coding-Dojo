using System.ComponentModel.DataAnnotations;

namespace ProductsCategories.Lib;

public class PastDateAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if (value is DateTime)
        {
            var dateValue = (DateTime)value;

            if (dateValue > DateTime.Now)
            {
                return new ValidationResult("The date must be in the past.");
            }
        }
        else
        {
            return new ValidationResult("Invalid date!");
        }

        return ValidationResult.Success;
    }
}

public class AtLeastEighteenAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if (value is DateTime)
        {
            var dateValue = (DateTime)value;
            int yearsOld = DateTime.Now.Year - dateValue.Year;

            // the year will be one year off if the birthday hasn't happened yet
            if (dateValue.Date > DateTime.Now.AddYears(-yearsOld)) yearsOld--;

            if (yearsOld < 18)
            {
                return new ValidationResult("You must be at least 18 years old.");
            }
        }
        else
        {
            return new ValidationResult("Invalid date!");
        }

        return ValidationResult.Success;
    }
}
