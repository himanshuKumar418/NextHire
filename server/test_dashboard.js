async function testFreshDashboard() {
  try {
    console.log('1. Attempting login as fresh user...');
    const loginRes = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'freshstudent@example.com',
        password: 'password123'
      })
    });

    if (!loginRes.ok) {
      throw new Error(`Login failed with status ${loginRes.status}: ${await loginRes.text()}`);
    }

    const loginData = await loginRes.json();
    const token = loginData.token;
    console.log('Login successful. Token obtained: YES');

    console.log('2. Requesting dashboard data with token...');
    const dashboardRes = await fetch('http://localhost:5000/api/dashboard', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('Dashboard Response status:', dashboardRes.status);
    const data = await dashboardRes.json();
    console.log('Dashboard Data:', JSON.stringify(data, null, 2));

    const expectedFreshDefaults = {
      xp: 0,
      level: 1,
      streak: 0,
      readiness: 0,
      todayGoal: 0,
      completedTracks: 0,
      questionsSolved: 0,
      studyHours: 0,
      accuracy: 0,
      unlockedBadgesCount: 0,
      bestTopic: '',
      weakestTopic: '',
      recentActivity: '',
      weeklyXp: 0
    };

    console.log('\n--- Validation Checks (Fresh User) ---');
    let allValid = true;
    for (const [field, expectedVal] of Object.entries(expectedFreshDefaults)) {
      if (data.stats && data.stats[field] !== undefined) {
        if (data.stats[field] !== expectedVal) {
          console.log(`✗ Error: stats.${field} is ${JSON.stringify(data.stats[field])}, expected ${JSON.stringify(expectedVal)}`);
          allValid = false;
        } else {
          console.log(`✓ stats.${field} has correct default: ${JSON.stringify(expectedVal)}`);
        }
      } else {
        console.log(`✗ Field "stats.${field}" is MISSING!`);
        allValid = false;
      }
    }

    if (allValid) {
      console.log('\n✓ Success: All fresh user fields and defaults match requirements exactly!');
    } else {
      console.log('\n✗ Fail: Requirements not met.');
    }
  } catch (error) {
    console.error('Error during test:', error.message);
  }
}

testFreshDashboard();
