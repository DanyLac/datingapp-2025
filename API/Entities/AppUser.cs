 namespace API.Entities;

public class AppUser
{
    // génére un guid convertit en string
    public string Id { get; set; }=Guid.NewGuid().ToString();
    // required force le non null
    public required string DisplayName { get; set; }
    public required string Email { get; set; }

    public required byte[] PasswordHash { get; set; }
    public required byte[] PasswordSalt { get; set; }
}
