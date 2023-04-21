export async function getProfile(otherProfile = null) {
  if (!otherProfile && !argv.p && !argv.profile) {
    console.log(`A profile must be defined with --profile or -p`);
    process.exit();
  }

  const profileName = otherProfile || argv.p || argv.profile;

  const { protocol = "https", ...profile } = await fs.readJson(
    `./profiles/${profileName}.json`
  );

  return {
    key: `account-${profile.address}`,
    protocol,
    node: `${protocol}://${profile.hostname}:${profile.port}`,
    ...profile,
  };
}
