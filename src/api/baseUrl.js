/**
 * Created by taha on 7/31/17.
 */
export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? 'http://localhost:3001/' : '/';
}
