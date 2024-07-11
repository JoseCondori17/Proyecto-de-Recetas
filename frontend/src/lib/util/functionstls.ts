export function calculateTimeAgo (dateString: string, timeString: string) {
  const postDateTime = new Date(`${dateString}T${timeString}`);
  const currentTime = new Date();
  const diffInMs = currentTime.getTime() - postDateTime.getTime();
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

  if (diffInHours >= 24) {
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} ${diffInDays > 1 ? 'days' : 'day'} ago`;
  } else {
    return `${diffInHours} ${diffInHours > 1 ? 'hours' : 'hour'} ago`;
  }
}