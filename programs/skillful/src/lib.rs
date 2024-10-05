use anchor_lang::prelude::*;


declare_id!("7GNGqZ2omeTnWp4jXrAemcBgmwEQ99jtDnCPdhnGEEhg");



#[program]
pub mod skillful {
    use super::*;

    pub fn initialize_user(ctx: Context<InitializeUser>, name: String) -> Result<()> {
        let user_profile = &mut ctx.accounts.user_profile;
        let user = &mut ctx.accounts.user;
        user_profile.name   = name;
        user_profile.skills = Vec::new();
        user_profile.user = *user.key;
        Ok(())
    }

    pub fn add_skill(ctx: Context<AddSkill>, skill_name: String) -> Result<()>{
        let user_profile = &mut ctx.accounts.user_profile;
        let skill = Skill{
            name : skill_name,
            validated : false,
            validators : Vec::new(),
        };
        user_profile.skills.push(skill);
        Ok(())
    }

    pub fn request_validation(ctx: Context<RequestValidation>, skill_index: u8, validator:Pubkey)-> Result<()>{
        let user_profile = &mut ctx.accounts.user_profile;
        let skill = &mut user_profile.skills[skill_index as usize];

        require!(!skill.validated, ErrorCode::SkillAlreadyValidated);
        require!(skill.validators.contains(&validator), ErrorCode::UnauthorizedValidator);
        
        skill.validators.push(validator);
        Ok(())

    }
}




#[derive(Accounts)]
pub struct InitializeUser <'info>{
    #[account(init, payer = user, space = 8 + 32 + 200)]
    pub user_profile: Account<'info, UserProfile >,
    #[account(mut)]
    pub user : Signer<'info>,
    
    pub system_program : Program<'info, System >

}

#[account]
pub struct UserProfile{
    pub name : String ,
    pub skills : Vec<Skill>,
    pub user : Pubkey,
}


#[derive(AnchorSerialize, AnchorDeserialize, Clone, Default)]
pub struct Skill{
    pub name : String,
    pub validated : bool,
    pub validators : Vec<Pubkey>
}

#[derive(Accounts)]
pub struct AddSkill<'info>{
    #[account[mut]]
    pub user_profile: Account<'info, UserProfile> ,
    pub user : Signer<'info>
}

#[derive(Accounts)]
pub struct RequestValidation<'info>{
    #[account[mut]]
    pub user_profile: Account<'info, UserProfile>,
    pub user : Signer<'info>
}

#[error_code]
pub enum ErrorCode{
    #[msg("This  Skill Has Already Been Validated ")]
    SkillAlreadyValidated,
    #[msg("This validator has already been added")]
    ValidatorAlreadyAdded,
    #[msg("Unauthorized validator")]
    UnauthorizedValidator,
}